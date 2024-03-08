/*
Copyright 2023 Comcast Cable Communications Management, LLC

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
  DeepLinks,
  Pane,
  PaneArrangement,
  Panes,
  PaneType,
  paneTypes,
  PorrtalMenuItem,
  StateObject,
  View,
  ViewComponentFunction,
  ViewComponentModules,
  ViewComponentProps,
  ViewState,
  AuthZ,
  LaunchInvoker,
  LaunchItem,
} from '@porrtal/a-api';
import { RxState } from '@rx-angular/state';
import { v4 as uuidv4 } from 'uuid';
import { replaceParameters } from '../shell-utilities/shell-utilities';
import * as dot from 'dot-object';
import { state } from '@angular/animations';

export interface MaximizeItem {
  htmlEl: HTMLElement;
  parentHtmlEl: HTMLElement;
  parentHtmlElChildIndex: number;
  maximizeText: string;
  zIndex: number;
  restore?: () => void;
}

export interface ShellState {
  panes: Panes;
  viewComponentModules: ViewComponentModules;
  views: View[];
  showUserInfo: boolean;
  showDevInfo: boolean;
  navWidth?: number;
  navTabWidth?: number;
  menuItems?: PorrtalMenuItem[];
  maximizeZIndex: number;
  maximizeStack: MaximizeItem[];
  authZs: {
    [name: string]: AuthZ;
  };
}

export type ShellAction =
  | {
      type: 'launchView';
      viewId: string;
      state?: StateObject;
      launchInvoker?: LaunchInvoker;
      suppressFocus?: boolean;
    }
  | { type: 'launchStartupViews' }
  | { type: 'moveView'; key: string; toPane: PaneType } // prevent when maximize
  | { type: 'deleteViewState'; key: string } // prevent when maximize
  | { type: 'setCurrentViewStateByKey'; key: string; pane: Pane }
  | { type: 'arrangePane'; pane: Pane; paneArrangement: PaneArrangement } // prevent when maximize
  | { type: 'registerModules'; modules: ViewComponentModules }
  | { type: 'registerView'; view: View }
  | { type: 'setShowUserInfo'; show: boolean }
  | { type: 'setShowDevInfo'; show: boolean }
  | { type: 'showNav' }
  | { type: 'toggleNav'; item: ViewState }
  | { type: 'setNavTabWidth'; width: number }
  | { type: 'launchDeepLinks'; queryString: string }
  | { type: 'copyToClipboard'; viewState: ViewState }
  | {
      type: 'maximize';
      htmlEl: HTMLElement;
      maximizeText: string;
      restore?: () => void;
    }
  | { type: 'restoreMaximized' }
  | {
      type: 'registerAuthZPermissionCheck';
      name: string;
      checkPermission: (parm: string) => boolean;
    }
  | { type: 'setAuthZReady'; name: string };

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
    Promise.resolve(true).then(() => {
      switch (action.type) {
        case 'launchView': {
          this.set((state) => {
            // locate view
            const view = state.views.find(
              (view) => view.viewId === action.viewId
            );
            if (!view) {
              // todo: log error: view for viewId not found
              console.log('launchView not found.', action);
              return {};
            }

            // execute permissions processing
            if (
              !this.okToLaunch({
                launchInvoker: action.launchInvoker ?? 'direct',
                view: view,
                state: action.state,
              })
            ) {
              return {};
            }

            // merge action state with view's state
            const newState = combineViewStateStateAndActionState(
              view.state,
              action.state
            );

            // replace state's replaceable parameters
            const newKey = replaceParameters(
              view.key ?? uuidv4(),
              newState ?? {}
            );
            const newDisplayText = replaceParameters(
              view.displayText,
              newState ?? {}
            );
            const newDisplayIcon = replaceParameters(
              view.displayIcon ?? '',
              newState ?? {}
            );

            // lookup component function for the view
            const viewComponentFunction: ViewComponentFunction | undefined =
              retrieveViewComponentFunction(
                view.componentName,
                view.componentModule,
                state.viewComponentModules
              );
            if (!viewComponentFunction) {
              throw new Error(
                `ViewComponentFunction is undefined.  module ('${view.componentModule}') not found for component name('${view.componentName}').)`
              );
            }

            // construct the new view state
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

            let retState = {};

            // see if the view state's key exists in a pane (replace it if so)
            if (
              paneTypes.some((paneType) => {
                const ii = state.panes[paneType].viewStates.findIndex(
                  (vs) => vs.key === newViewState.key
                );
                if (ii >= 0) {
                  const newArray = [...state.panes[paneType].viewStates];
                  newArray.splice(ii, 1, newViewState);
                  retState = {
                    ...state,
                    panes: {
                      ...state.panes,
                      [paneType]: {
                        ...state.panes[paneType],
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
              return retState;
            }

            // view state's key didn't already exist, so add the view state to the requested pane
            const viewStates = state.panes[newViewState.paneType].viewStates;
            if (!action.suppressFocus) {
              // set focus to new view state
              retState = {
                ...state,
                panes: {
                  ...state.panes,
                  [newViewState.paneType]: {
                    ...state.panes[newViewState.paneType],
                    currentKey: newViewState.key,
                    viewStates: [...viewStates, newViewState],
                  },
                },
              };
            } else {
              // launch but don't set focus
              retState = {
                ...state,
                panes: {
                  ...state.panes,
                  [newViewState.paneType]: {
                    ...state.panes[newViewState.paneType],
                    viewStates: [...viewStates, newViewState],
                  },
                },
              };
            }

            return retState;
          });
          break;
        }

        case 'moveView': {
          let retState = this.get();

          // prevent move view if there are maximized elements
          if (retState.maximizeStack.length > 0) {
            throw new Error(
              'Shell State Service: Cannot "moveView" when elements are maximized.'
            );
          }

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

          // prevent move view if there are maximized elements
          if (retState.maximizeStack.length > 0) {
            throw new Error(
              'Shell State Service: Cannot "deleteViewState" when elements are maximized.'
            );
          }

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
          // prevent move view if there are maximized elements
          const state = this.get();
          if (state.maximizeStack.length > 0) {
            throw new Error(
              'Shell State Service: Cannot "moveView" when elements are maximized.'
            );
          }

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
          const menuItems = updateMenus(newView, this.get().menuItems);
          this.set({
            ...this.get(),
            views: [...this.get().views, newView],
            menuItems,
          });
          return;
        }

        case 'launchStartupViews': {
          this.get()
            .views.filter((view) => view.launchAtStartup)
            .forEach((view) => {
              console.log('launch startup view', view);
              // Promise.resolve(true).then(() => {
              this.dispatch({
                type: 'launchView',
                viewId: view.viewId ?? view.componentName,
                launchInvoker: 'startup',
              });
              // });
            });

          Promise.resolve(true).then(() => {
            paneTypes.forEach((paneType) => {
              const pane = this.get().panes[paneType];
              if (pane.viewStates.length > 0) {
                // Promise.resolve(true).then(() => {
                this.dispatch({
                  type: 'setCurrentViewStateByKey',
                  key: pane.viewStates[0].key,
                  pane,
                });
                // });
              }
            });
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
          const isSelectedTab =
            state.panes['nav'].currentKey === action.item.key;
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

        case 'launchDeepLinks': {
          // launch deep links
          const deepLinks: DeepLinks = {};
          const queryString = action.queryString;
          const searchParams = new URLSearchParams(queryString);
          for (const key of searchParams.keys()) {
            const parts = key.split('.');
            if (parts[0] !== 'v') {
              continue;
            }

            if (parts.length < 3) {
              continue;
            }

            if (parts[2] === 'viewId' || parts[2] === 'regId') {
              if (deepLinks[parts[1]]) {
                deepLinks[parts[1]].viewId = searchParams.get(key) ?? '';
              } else {
                deepLinks[parts[1]] = { viewId: searchParams.get(key) ?? '' };
              }
              continue;
            }

            if (parts.length < 4) {
              continue;
            }

            if (parts[2] === 's') {
              if (!deepLinks[parts[1]]) {
                deepLinks[parts[1]] = { state: {} };
              }

              if (!deepLinks[parts[1]].state) {
                deepLinks[parts[1]].state = {};
              }

              let s: StateObject = deepLinks[parts[1]].state ?? {};
              for (let ii = 3; ii < parts.length - 1; ii++) {
                if (s) {
                  const obj: StateObject = (s[parts[ii]] as StateObject) ?? {};
                  s[parts[ii]] = obj;
                  s = obj;
                }
              }
              if (s) {
                s[parts[parts.length - 1]] = searchParams.get(key) ?? '';
              }
            }
          }
          console.log('deep links: ', deepLinks);
          for (let key of Object.keys(deepLinks)) {
            const viewId = deepLinks[key].viewId;
            if (!viewId) {
              continue;
            }
            // Promise.resolve(true).then(() => {
            this.dispatch({
              type: 'launchView',
              viewId,
              state: deepLinks[key].state,
              launchInvoker: 'deepLink',
            });
            // });
          }
          break;
        }

        case 'copyToClipboard': {
          navigator.clipboard.writeText(getViewStateDeepLink(action.viewState));
          break;
        }

        case 'maximize': {
          const parentEl = action.htmlEl.parentElement;
          if (!parentEl) {
            console.log(
              'error. called shell state service: maximize with element with no parent element'
            );
            return;
          }

          this.set((state) => ({
            maximizeZIndex: state.maximizeZIndex + 10,
            maximizeStack: [
              ...state.maximizeStack,
              {
                htmlEl: action.htmlEl,
                maximizeText: action.maximizeText,
                parentHtmlEl: parentEl,
                parentHtmlElChildIndex: Array.prototype.indexOf.call(
                  parentEl.children,
                  action.htmlEl
                ),
                zIndex: state.maximizeZIndex,
                restore: action.restore,
              },
            ],
          }));
          break;
        }

        case 'restoreMaximized': {
          this.set((state) => {
            const newMaximizeStack = [...state.maximizeStack];
            const maximizeItem = newMaximizeStack.pop();

            // parent back to original parent
            maximizeItem?.parentHtmlEl.insertBefore(
              maximizeItem.htmlEl,
              maximizeItem.parentHtmlEl.children[
                maximizeItem.parentHtmlElChildIndex
              ]
            );

            return {
              maximizeZIndex: state.maximizeZIndex - 10,
              maximizeStack: newMaximizeStack,
            };
          });
          break;
        }

        case 'setAuthZReady': {
          this.set((state) => {
            const newAuthZs = {
              authZs: {
                ...(state.authZs ?? {}),
                [action.name]: {
                  ...(state.authZs[action.name] ?? {
                    launchQ: [],
                    noPermissionsQ: [],
                  }),
                  ready: true,
                },
              },
            };
            this.set(newAuthZs);
            console.log('shell service - setAuthZReady', { state, newAuthZs });
            return newAuthZs;
          });
          break;
        }

        case 'registerAuthZPermissionCheck': {
          this.set((state) => {
            const newAuthZs = {
              authZs: {
                ...(state.authZs ?? {}),
                [action.name]: {
                  ...(state.authZs[action.name] ?? {
                    ready: false,
                    launchQ: [],
                    noPermissionsQ: [],
                  }),
                  checkPermission: action.checkPermission,
                },
              },
            };
            this.set(newAuthZs);
            console.log('shell service - registerAuthZPermissionCheck', {
              state,
              newAuthZs,
            });
            return newAuthZs;
          });
          Promise.resolve(true).then(() => {
            this.processLaunchQ(action.name);
          });
          break;
        }
      }
    });
  };

  processLaunchQ(name: string) {
    this.set((state) => {
      const authZs = state.authZs;
      if (
        !authZs ||
        !authZs[name] ||
        !authZs[name].launchQ ||
        authZs[name].launchQ.length < 1
      ) {
        console.log('processLaunchQ (do nothing)', { name, state });
        return {};
      }

      console.log('processLaunchQ', { name, state });
      authZs[name].launchQ.forEach((launchItem) => {
        console.log('launch from launchQ', launchItem);
        // Promise.resolve(true).then(() => {
        this.dispatch({
          type: 'launchView',
          viewId: launchItem.viewId,
          launchInvoker: launchItem.launchInvoker,
          state: launchItem.state,
          suppressFocus: true,
        });
        // });
      });

      const newAuthZs = {
        authZs: {
          ...authZs,
          [name]: {
            ...authZs[name],
            launchQ: [],
          },
        },
      };
      console.log('shell service - processLaunchQ', { state, newAuthZs });
      return newAuthZs;
    });
  }

  okToLaunch(launchInfo: {
    launchInvoker: LaunchInvoker;
    view: View;
    state?: StateObject;
  }) {
    // ------- permissions syntax: --------------
    //  view.permissions: [<name>:][<parm>]
    //    if <name>: not provided, use 'primary'
    // ------------------------------------------

    // if view doesn't require permissions, return true
    if (
      !launchInfo.view.permissions ||
      launchInfo.view.permissions.trim().length < 1
    ) {
      return true;
    }

    const permissions = launchInfo.view.permissions.trim();
    const [first, ...rest] = permissions.split(':');

    let name = 'primary';
    let parm = '';

    if (rest.length < 1) {
      // name: not provided
      parm = permissions;
    } else {
      name = first;
      parm = rest.join(':');
    }

    // see if we are tracking this authZ (create if not)
    const authZs = this.get('authZs');
    let authZ = authZs[name];
    if (!authZ) {
      authZ = {
        ready: false,
        checkPermission: undefined,
        launchQ: [],
        noPermissionsQ: [],
      };
    }

    // handle malformed permissions string
    if (name.length < 1) {
      this.set({
        authZs: {
          ...authZs,
          [name]: {
            ...authZ,
            noPermissionsQ: [
              ...authZ.noPermissionsQ,
              {
                launchInvoker: launchInfo.launchInvoker,
                viewId:
                  launchInfo.view.viewId ?? 'viewId has value at this point',
                state: launchInfo.state,
              },
            ],
          },
        },
      });
      console.log(
        `Warning: view ('${launchInfo.view.viewId}') has malformed permissions('${launchInfo.view.permissions}').`,
        { name, parm, authZs: this.get('authZs') }
      );
      return false;
    }

    // handle not ready or permissions function missing
    if (!authZ.ready || !authZ.checkPermission) {
      this.set({
        authZs: {
          ...authZs,
          [name]: {
            ...authZ,
            launchQ: [
              ...authZ.launchQ,
              {
                launchInvoker: launchInfo.launchInvoker,
                viewId:
                  launchInfo.view.viewId ?? 'viewId has value at this point',
                state: launchInfo.state,
              },
            ],
          },
        },
      });
      console.log(
        `Info: view ('${launchInfo.view.viewId}') --> launchQ ('${launchInfo.view.permissions}').`,
        { name, parm, authZs: this.get('authZs') }
      );
      return false;
    }

    // handle permissions check passed
    if (authZ.checkPermission(parm)) {
      return true;
    }

    // handle permission check not passed
    this.set({
      authZs: {
        ...authZs,
        [name]: {
          ...authZ,
          noPermissionsQ: [
            ...authZ.noPermissionsQ,
            {
              launchInvoker: launchInfo.launchInvoker,
              viewId:
                launchInfo.view.viewId ?? 'viewId has value at this point',
              state: launchInfo.state,
            },
          ],
        },
      },
    });
    console.log(
      `Info: view ('${launchInfo.view.viewId}') --> noPermissionsQ ('${launchInfo.view.permissions}').`,
      { name, parm, authZs: this.get('authZs') }
    );
    return false;
  }
}

export function getViewStateDeepLink(viewState: ViewState): string {
  let ret = `${location.origin}${location.pathname}?`;
  ret = `${ret}v.1.viewId=${viewState.view.viewId?.split(' ').join('+')}`;
  if (viewState.state) {
    const s = dot.dot(viewState.state);
    for (const key in s) {
      ret = `${ret}&v.1.s.${key}=${
        typeof s[key] === 'string' ? s[key].split(' ').join('+') : s[key]
      }`;
    }
  }
  return ret;
}

export function updateMenus(view: View, menuItems?: PorrtalMenuItem[]) {
  const containerMenuItem: PorrtalMenuItem = {
    childMenu: menuItems,
  };

  if (view.menu && view.menu.trim().length > 0) {
    let currentMenuItem = containerMenuItem;

    const menuParts = view.menu
      .trim()
      .split('.')
      .map((item) => {
        const [displayText, displayIcon] = item.split(':');
        const ret: { displayText?: string; displayIcon?: string } = {};
        if (displayText) {
          ret.displayText = displayText;
        }
        if (displayIcon) {
          ret.displayIcon = displayIcon;
        }
        return ret;
      });

    menuParts.forEach((menuPart, index) => {
      if (!currentMenuItem.childMenu) {
        currentMenuItem.childMenu = [
          {
            ...menuPart,
          },
        ];
        currentMenuItem = currentMenuItem.childMenu[0];
      } else {
        const item = currentMenuItem.childMenu.find(
          (menuItem) => menuItem.displayText === menuPart.displayText
        );
        if (!item) {
          const newItem = {
            ...menuPart,
          };
          currentMenuItem.childMenu = [...currentMenuItem.childMenu, newItem];
          currentMenuItem = newItem;
        } else {
          currentMenuItem.childMenu = [...currentMenuItem.childMenu];
          currentMenuItem = item;
        }
      }
      if (index === menuParts.length - 1) {
        currentMenuItem.viewId = view.viewId;
      }
    });
  }
  return containerMenuItem.childMenu;
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
  maximizeZIndex: 90,
  maximizeStack: [],
  authZs: {},
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
