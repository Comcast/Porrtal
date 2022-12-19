/*
Copyright 2022 Comcast Cable Communications Management, LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import { Injectable, Type } from '@angular/core';
import {
  Pane,
  PaneArrangement,
  Panes,
  PaneType,
  paneTypes,
  StateObject,
  View,
  ViewComponentFunction,
  ViewComponentModules,
  ViewComponentProps,
  ViewState,
} from '@porrtal/a-api';
import { RxState } from '@rx-angular/state';
import { v4 as uuidv4 } from 'uuid';
import { replaceParameters } from '../shell-utilities/shell-utilities';

export interface ShellState {
  panes: Panes;
  viewComponentModules: ViewComponentModules;
  views: View[];
  showUserInfo: boolean;
  showDevInfo: boolean;
  navWidth?: number;
  navTabWidth?: number;
}

export type ShellAction =
  | { type: 'launchView'; viewId: string; state?: StateObject }
  | { type: 'launchStartupViews' }
  | { type: 'moveView'; key: string; toPane: PaneType }
  | { type: 'deleteViewState'; key: string }
  | { type: 'setCurrentViewStateByKey'; key: string; pane: Pane }
  | { type: 'arrangePane'; pane: Pane; paneArrangement: PaneArrangement }
  | { type: 'registerModules'; modules: ViewComponentModules }
  | { type: 'registerView'; view: View }
  | { type: 'setShowUserInfo'; show: boolean }
  | { type: 'setShowDevInfo'; show: boolean }
  | { type: 'showNav' }
  | { type: 'toggleNav'; item: ViewState }
  | { type: 'setNavTabWidth'; width: number };

@Injectable({
  providedIn: 'root',
})
export class ShellStateService extends RxState<ShellState> {
  readonly state$ = this.select();

  constructor() {
    super();
    this.set(emptyUseShellState);
  }

  public dispatch = (action: ShellAction) => {
    switch (action.type) {
      case 'launchView': {
        const view = this.get().views.find(
          (view) => view.viewId === action.viewId
        );
        if (!view) {
          // todo: log error: view for viewId not found
          console.log('launchView not found.', action);
          return;
        }
        let retState: ShellState = this.get();
        const newState = combineViewStateStateAndActionState(
          view.state,
          action.state
        );
        const newKey = replaceParameters(view.key ?? uuidv4(), newState ?? {});
        const newDisplayText = replaceParameters(
          view.displayText,
          newState ?? {}
        );
        const newDisplayIcon = replaceParameters(
          view.displayIcon ?? '',
          newState ?? {}
        );
        const viewComponentFunction: ViewComponentFunction | undefined =
          retrieveViewComponentFunction(
            view.componentName,
            view.componentModule,
            this.get().viewComponentModules
          );
        if (!viewComponentFunction) {
          throw new Error(
            `ViewComponentFunction is undefined.  module ('${view.componentModule}') not found for component name('${view.componentName}').)`
          );
        }
        const newViewState: ViewState = {
          key: newKey.replaced,
          displayText: newDisplayText.replaced,
          displayIcon: newDisplayIcon.replaced,
          state: newState,

          userInfo: view.userInfo,
          devInfo: view.devInfo,

          paneType: view.paneType ?? 'main',
          componentImport: viewComponentFunction,
          view,
        };

        // see if the key exists already (replace it if so)
        if (
          paneTypes.some((paneType) => {
            const ii = this.get().panes[paneType].viewStates.findIndex(
              (vs) => vs.key === newViewState.key
            );
            if (ii >= 0) {
              const newArray = [...this.get().panes[paneType].viewStates];
              newArray.splice(ii, 1, newViewState);
              retState = {
                ...this.get(),
                panes: {
                  ...this.get().panes,
                  [paneType]: {
                    ...this.get().panes[paneType],
                    currentKey: newViewState.key,
                    viewStates: newArray,
                    paneType,
                  },
                },
              };
              return true;
            }
            return false;
          })
        ) {
          this.set(retState);
          return;
        }

        // key didn't exist so add the view state to the requested pane
        const viewStates = this.get().panes[newViewState.paneType].viewStates;
        retState = {
          ...this.get(),
          panes: {
            ...this.get().panes,
            [newViewState.paneType]: {
              ...this.get().panes[newViewState.paneType],
              currentKey: newViewState.key,
              viewStates: [...viewStates, newViewState],
            },
          },
        };
        this.set(retState);
        return;
      }

      case 'moveView': {
        let retState = this.get();
        let foundViewState: ViewState | undefined;

        paneTypes.some((paneType) => {
          foundViewState = this.get().panes[paneType].viewStates.find(
            (vs) => vs.key === action.key
          );
          if (foundViewState) {
            if (paneType === action.toPane) {
              // asking to move it to the pane it is already in (do nothing)
              return true;
            }

            foundViewState = {
              ...foundViewState,
              paneType: action.toPane,
            };

            retState = {
              ...this.get(),
              panes: {
                ...this.get().panes,
                [paneType]: {
                  ...this.get().panes[paneType],
                  currentKey: computeCurrentKey(this.get(), paneType, {
                    type: 'deleteViewState',
                    key: action.key,
                  }),
                  viewStates: [
                    ...this.get().panes[paneType].viewStates.filter(
                      (vs) => vs.key !== action.key
                    ),
                  ],
                  paneType,
                },
                [action.toPane]: {
                  ...this.get().panes[action.toPane],
                  viewStates: [
                    ...this.get().panes[action.toPane].viewStates,
                    foundViewState,
                  ],
                  currentKey: action.key,
                  paneType: action.toPane,
                },
              },
            };
            return true;
          } else {
            return false;
          }
        });
        this.set(retState);
        return;
      }

      case 'setCurrentViewStateByKey': {
        const paneType = Object.keys(this.get().panes).find(
          (key) => this.get().panes[key as PaneType] === action.pane
        );
        if (!paneType) {
          return;
        }
        this.set({
          ...this.get(),
          panes: {
            ...this.get().panes,
            [paneType]: {
              ...action.pane,
              currentKey: action.key,
              paneType,
            },
          },
        });
        return;
      }

      case 'deleteViewState': {
        let retState = this.get();
        let foundView: ViewState | undefined;

        paneTypes.some((paneType) => {
          foundView = this.get().panes[paneType].viewStates.find(
            (vs) => vs.key === action.key
          );
          if (foundView) {
            retState = {
              ...this.get(),
              panes: {
                ...this.get().panes,
                [paneType]: {
                  ...this.get().panes[paneType],
                  currentKey: computeCurrentKey(this.get(), paneType, {
                    type: 'deleteViewState',
                    key: action.key,
                  }),
                  viewStates: [
                    ...this.get().panes[paneType].viewStates.filter(
                      (vs) => vs.key !== action.key
                    ),
                  ],
                  paneType,
                },
              },
            };
            return true;
          } else {
            return false;
          }
        });
        this.set(retState);
        return;
      }

      case 'arrangePane': {
        const retState = {
          ...this.get(),
          panes: {
            ...this.get().panes,
            [action.pane.paneType]: {
              ...this.get().panes[action.pane.paneType],
              arrange: action.paneArrangement,
            },
          },
        };
        console.log('arrange pane', action, retState);
        this.set(retState);
        return;
      }

      case 'registerModules':
        this.set({
          ...this.get(),
          viewComponentModules: {
            ...this.get().viewComponentModules,
            ...action.modules,
          },
        });
        return;

      case 'registerView': {
        const newView = {
          ...action.view,
        };
        if (!newView.viewId) {
          newView.viewId = newView.componentName;
        }
        if (!newView.key) {
          newView.key = uuidv4();
        }
        this.set({
          ...this.get(),
          views: [...this.get().views, newView],
        });
        return;
      }

      case 'launchStartupViews': {
        this.get()
          .views.filter((view) => view.launchAtStartup)
          .forEach((view) => {
            console.log('launch startup view', view);
            this.dispatch({
              type: 'launchView',
              viewId: view.viewId ?? view.componentName,
            });
          });

        paneTypes.forEach((paneType) => {
          const pane = this.get().panes[paneType];
          if (pane.viewStates.length > 0) {
            this.dispatch({
              type: 'setCurrentViewStateByKey',
              key: pane.viewStates[0].key,
              pane,
            });
          }
        });
        return;
      }

      case 'setShowUserInfo':
        this.set({
          showUserInfo: action.show,
        });
        return;

      case 'setShowDevInfo':
        this.set({
          showDevInfo: action.show,
        });
        return;

      case 'showNav': {
        const state = this.get();
        this.set({
          ...state,
          navWidth: undefined,
        });
        return;
      }

      case 'toggleNav': {
        const state = this.get();
        const isSelectedTab = state.panes['nav'].currentKey === action.item.key;
        const navTabWidth = state.navTabWidth ?? 36;
        this.set({
          ...state,
          navWidth: isSelectedTab
            ? state.navWidth
              ? undefined
              : navTabWidth
            : undefined,
        });
        return;
      }

      case 'setNavTabWidth': {
        const state = this.get();
        this.set({
          ...state,
          navTabWidth: action.width,
        });
        return;
      }
    }
  };
}

function retrieveViewComponentFunction(
  componentName: string,
  componentModule: string | (() => Promise<Record<string, unknown>>),
  viewComponentModules: ViewComponentModules
): ViewComponentFunction | undefined {
  if (typeof componentModule === 'string') {
    const moduleFunction = viewComponentModules[componentModule];
    if (!moduleFunction) {
      return undefined;
    }
    return () =>
      moduleFunction().then(
        (module: Record<string, unknown>) =>
          module[componentName] as Type<ViewComponentProps>
      );
  }

  return () =>
    componentModule().then((module: Record<string, unknown>) => {
      console.log('Retrieve View Component Function', componentName, module);
      return module[componentName] as Type<ViewComponentProps>;
    });
}

function computeCurrentKey(
  state: ShellState,
  paneType: string,
  action: { type: 'deleteViewState'; key: string }
): string {
  // if we aren't deleting the current one, keep the current one the same
  if (state.panes[paneType as PaneType].currentKey !== action.key) {
    return state.panes[paneType as PaneType].currentKey;
  }

  // find the one that we are supposed to delete
  const vsWithKey = state.panes[paneType as PaneType].viewStates.find(
    (item) => item.key === action.key
  );

  // if we don't find one to delete that matches the key and the current is the key we didn't find
  if (!vsWithKey) {
    // if there are none in the array, set the current to nothing
    if (state.panes[paneType as PaneType].viewStates.length < 1) {
      return '';
    }

    // there are some in the array, set the current one to the first element
    return state.panes[paneType as PaneType].viewStates[0].key;
  }

  // if the one we are deleting is the only one, set the current to nothing
  if (vsWithKey && state.panes[paneType as PaneType].viewStates.length === 1) {
    return '';
  }

  let vsIndex = state.panes[paneType as PaneType].viewStates.indexOf(vsWithKey);
  if (vsIndex === state.panes[paneType as PaneType].viewStates.length - 1) {
    vsIndex--;
  } else {
    vsIndex++;
  }

  return state.panes[paneType as PaneType].viewStates[vsIndex].key;
}

const emptyUseShellState: ShellState = {
  panes: {
    nav: {
      viewStates: [] as ViewState[],
      arrange: 'tabs-left',
      currentKey: '',
      paneType: 'nav',
    },
    main: {
      viewStates: [] as ViewState[],
      arrange: 'tabs-top',
      currentKey: '',
      paneType: 'main',
    },
    bottom: {
      viewStates: [] as ViewState[],
      arrange: 'tabs-top',
      currentKey: '',
      paneType: 'bottom',
    },
    right: {
      viewStates: [] as ViewState[],
      arrange: 'tabs-top',
      currentKey: '',
      paneType: 'right',
    },
    search: {
      viewStates: [] as ViewState[],
      arrange: 'tabs-top',
      currentKey: '',
      paneType: 'search',
    },
  },
  viewComponentModules: {},
  views: [],
  showUserInfo: true,
  showDevInfo: true,
};

export function combineViewStateStateAndActionState(
  viewStateState: StateObject | undefined,
  actionState: StateObject | undefined
) {
  if (actionState === undefined || actionState === null) {
    return viewStateState;
  }

  if (viewStateState === undefined || viewStateState === null) {
    return actionState;
  }

  return {
    ...viewStateState,
    ...actionState,
  };
}
