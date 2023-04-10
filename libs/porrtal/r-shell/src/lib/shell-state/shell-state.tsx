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
import {
  ViewComponentFunction,
  ViewState,
  Panes,
  PaneType,
  Pane,
  paneTypes,
  PaneArrangement,
  View,
  ViewComponentModules,
  ViewComponentProps,
  PorrtalMenuItem,
  DeepLinks,
  AuthZ,
  LaunchInvoker,
} from '@porrtal/r-api';
import {
  useReducer,
  Reducer,
  Dispatch,
  createContext,
  useContext,
  useMemo,
  PropsWithChildren,
  ComponentType,
  useEffect,
} from 'react';
import dot from 'dot-object';
import { StateObject } from '@porrtal/r-api';
import { replaceParameters } from '../shell-utilities/shell-utilities';
import SearchState from '../search-state/search-state';
import { LoggerState } from '../logger-state/logger-state';
import { v4 as uuidv4 } from 'uuid';

export interface UseShellState {
  panes: Panes;
  viewComponentModules: ViewComponentModules;
  views: View[];
  showUserInfo: boolean;
  showDevInfo: boolean;
  navWidth?: string;
  navTabWidth?: string;
  menuItems?: PorrtalMenuItem[];
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
  | { type: 'setNavTabWidth'; width: string }
  | { type: 'launchDeepLinks'; queryString: string }
  | { type: 'copyToClipboard'; viewState: ViewState }
  | {
      type: 'registerAuthZPermissionCheck';
      name: string;
      checkPermission: (parm: string) => boolean;
    }
  | { type: 'setAuthZReady'; name: string };

const reducer: Reducer<UseShellState, ShellAction> = (state, action) => {
  switch (action.type) {
    case 'launchView': {
      console.log('launchView', {action, state});
      const view = state.views.find((view) => view.viewId === action.viewId);
      if (!view) {
        // todo: log error: view for viewId not found
        return state;
      }

      // execute permissions processing
      const okToLaunchResult = okToLaunch(
        {
          launchInvoker: action.launchInvoker ?? 'direct',
          view: view,
          state: action.state,
        },
        state
      );

      if (!okToLaunchResult.okToLaunch) {
        return okToLaunchResult.state;
      }

      let retState: UseShellState = okToLaunchResult.state;
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
          state.viewComponentModules
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

      // key didn't exist so add the view state to the requested pane
      const viewStates = state.panes[newViewState.paneType].viewStates;
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
      return retState;
    }

    case 'moveView': {
      let retState = state;
      let foundViewState: ViewState | undefined;

      paneTypes.some((paneType) => {
        foundViewState = state.panes[paneType].viewStates.find(
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
            ...state,
            panes: {
              ...state.panes,
              [paneType]: {
                ...state.panes[paneType],
                currentKey: computeCurrentKey(state, paneType, {
                  type: 'deleteViewState',
                  key: action.key,
                }),
                viewStates: [
                  ...state.panes[paneType].viewStates.filter(
                    (vs) => vs.key !== action.key
                  ),
                ],
                paneType,
              },
              [action.toPane]: {
                ...state.panes[action.toPane],
                viewStates: [
                  ...state.panes[action.toPane].viewStates,
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
      return retState;
    }

    case 'setCurrentViewStateByKey': {
      const paneType = Object.keys(state.panes).find(
        (key) => state.panes[key as PaneType] === action.pane
      );
      if (!paneType) {
        return state;
      }
      return {
        ...state,
        panes: {
          ...state.panes,
          [paneType]: {
            ...action.pane,
            currentKey: action.key,
            paneType,
          },
        },
      };
    }

    case 'deleteViewState': {
      let retState = state;
      let foundView: ViewState | undefined;

      paneTypes.some((paneType) => {
        foundView = state.panes[paneType].viewStates.find(
          (vs) => vs.key === action.key
        );
        if (foundView) {
          retState = {
            ...state,
            panes: {
              ...state.panes,
              [paneType]: {
                ...state.panes[paneType],
                currentKey: computeCurrentKey(state, paneType, {
                  type: 'deleteViewState',
                  key: action.key,
                }),
                viewStates: [
                  ...state.panes[paneType].viewStates.filter(
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
      return retState;
    }

    case 'arrangePane': {
      const retState = {
        ...state,
        panes: {
          ...state.panes,
          [action.pane.paneType]: {
            ...state.panes[action.pane.paneType],
            arrange: action.paneArrangement,
          },
        },
      };
      console.log('arrange pane', action, retState);
      return retState;
    }

    case 'registerModules':
      return {
        ...state,
        viewComponentModules: {
          ...state.viewComponentModules,
          ...action.modules,
        },
      };

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
      const menuItems = updateMenus(newView, state.menuItems);

      return {
        ...state,
        views: [...state.views, newView],
        menuItems,
      };
    }

    case 'launchStartupViews': {
      state.views
        .filter((view) => view.launchAtStartup)
        .forEach((view) => {
          console.log('launch startup view', view);
          state = reducer(state, {
            type: 'launchView',
            launchInvoker: 'startup',
            viewId: view.viewId ?? view.componentName,
          });
        });
      return state;
    }

    case 'setShowUserInfo': {
      return {
        ...state,
        showUserInfo: action.show,
      };
    }

    case 'setShowDevInfo': {
      return {
        ...state,
        showUserInfo: action.show,
      };
    }

    case 'showNav': {
      return {
        ...state,
        navWidth: undefined,
      };
    }

    case 'toggleNav': {
      const isSelectedTab = state.panes['nav'].currentKey === action.item.key;
      const navTabWidth = state.navTabWidth ?? '36px';
      return {
        ...state,
        navWidth: isSelectedTab
          ? state.navWidth
            ? undefined
            : navTabWidth
          : undefined,
      };
    }

    case 'setNavTabWidth': {
      return {
        ...state,
        navTabWidth: action.width,
      };
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
        state = reducer(state, {
          type: 'launchView',
          viewId,
          launchInvoker: 'deepLink',
          state: deepLinks[key].state,
        });
      }
      break;
    }

    case 'copyToClipboard': {
      navigator.clipboard.writeText(getViewStateDeepLink(action.viewState));
      break;
    }

    case 'setAuthZReady': {
      state = {
        ...state,
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
      console.log('shell service - setAuthZReady', { state });
      return state;
    }

    case 'registerAuthZPermissionCheck': {
      state = {
        ...state,
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

      console.log('shell service - registerAuthZPermissionCheck', state);

      return processLaunchQ(action.name, state);
    }

    default: {
      return state;
    }
  }
  return state;
};

function processLaunchQ(name: string, state: UseShellState) {
  const authZs = state.authZs;
  if (
    !authZs ||
    !authZs[name] ||
    !authZs[name].launchQ ||
    authZs[name].launchQ.length < 1
  ) {
    console.log('processLaunchQ (do nothing)', { name, state });
    return state;
  }

  console.log('processLaunchQ', { name, state });
  authZs[name].launchQ.forEach((launchItem) => {
    console.log('launch from launchQ', launchItem);
    state = reducer(state, {
      type: 'launchView',
      viewId: launchItem.viewId,
      launchInvoker: launchItem.launchInvoker,
      state: launchItem.state,
      suppressFocus: true,
    });
  });

  console.log('shell service - processLaunchQ', { state });
  state = {
    ...state,
    authZs: {
      ...authZs,
      [name]: {
        ...authZs[name],
        launchQ: [],
      },
    },
  };
  return state;
}

function okToLaunch(
  launchInfo: {
    launchInvoker: LaunchInvoker;
    view: View;
    state?: StateObject;
  },
  state: UseShellState
): {
  okToLaunch: boolean;
  state: UseShellState;
} {
  // ------- permissions syntax: --------------
  //  view.permissions: [<name>:][<parm>]
  //    if <name>: not provided, use 'primary'
  // ------------------------------------------

  // if view doesn't require permissions, return true
  if (
    !launchInfo.view.permissions ||
    launchInfo.view.permissions.trim().length < 1
  ) {
    return { okToLaunch: true, state };
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
  const authZs = state.authZs;
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
    state = {
      ...state,
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
    };
    console.log(
      `Warning: view ('${launchInfo.view.viewId}') has malformed permissions('${launchInfo.view.permissions}').`,
      { name, parm, authZs: state.authZs }
    );
    return { okToLaunch: false, state };
  }

  // handle not ready or permissions function missing
  if (!authZ.ready || !authZ.checkPermission) {
    state = {
      ...state,
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
    };
    console.log(
      `Info: view ('${launchInfo.view.viewId}') --> launchQ ('${launchInfo.view.permissions}').`,
      { name, parm, authZs: state.authZs }
    );
    return { okToLaunch: false, state };
  }

  // handle permissions check passed
  if (authZ.checkPermission(parm)) {
    return { okToLaunch: true, state };
  }

  // handle permission check not passed
  state = {
    ...state,
    authZs: {
      ...authZs,
      [name]: {
        ...authZ,
        noPermissionsQ: [
          ...authZ.noPermissionsQ,
          {
            launchInvoker: launchInfo.launchInvoker,
            viewId: launchInfo.view.viewId ?? 'viewId has value at this point',
            state: launchInfo.state,
          },
        ],
      },
    },
  };
  console.log(
    `Info: view ('${launchInfo.view.viewId}') --> noPermissionsQ ('${launchInfo.view.permissions}').`,
    { name, parm, authZs: state.authZs }
  );
  return { okToLaunch: false, state };
}

export function getViewStateDeepLink(viewState: ViewState): string {
  let ret = `${location.origin}${location.pathname}?`;
  ret = `${ret}v.1.viewId=${viewState.view.viewId?.split(' ').join('+')}&`;
  if (viewState.state) {
    const s = dot.dot(viewState.state);
    for (const key in s) {
      ret = `${ret}v.1.s.${key}=${s[key].split(' ').join('+')}`;
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
      moduleFunction().then((module: Record<string, unknown>) => ({
        default: module[componentName] as ComponentType<ViewComponentProps>,
      }));
  }

  return () =>
    componentModule().then((module: Record<string, unknown>) => {
      console.log('Retrieve View Component Function', componentName, module);
      return {
        default: module[componentName] as ComponentType<ViewComponentProps>,
      };
    });
}

function computeCurrentKey(
  state: UseShellState,
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

const emptyUseShellState: UseShellState = {
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
  navWidth: '320px',
  authZs: {},
};

// arg to createContext is used if no provider is defined https://stackoverflow.com/q/49949099/7085047
const ShellStateContext = createContext<UseShellState>(emptyUseShellState);

// arg to createContext is used if no provider is defined https://stackoverflow.com/q/49949099/7085047
const ShellDispatchContext = createContext<Dispatch<ShellAction>>(
  (value: ShellAction) => {
    return;
  }
);

export interface ShellStateProps {
  views?: View[];
  modules?: ViewComponentModules;
}

export function ShellState(props: PropsWithChildren<ShellStateProps>) {
  // initialize to empty state
  const initialState: UseShellState = useMemo(() => {
    let memoState: UseShellState = {
      ...emptyUseShellState,
    };

    // register modules
    if (props.modules) {
      memoState = reducer(memoState, {
        type: 'registerModules',
        modules: props.modules,
      });
    }

    // register views
    props.views?.forEach(
      (view) =>
        (memoState = reducer(memoState, {
          type: 'registerView',
          view: view,
        }))
    );

    console.log('shell state: about to launch views', memoState);

    // launch startup views
    memoState = reducer(memoState, {
      type: 'launchStartupViews',
    });

    // set current tab to first of each collection
    paneTypes.forEach((paneType) => {
      if (memoState.panes[paneType].viewStates?.length > 0) {
        memoState = reducer(memoState, {
          type: 'setCurrentViewStateByKey',
          key: memoState.panes[paneType].viewStates[0].key,
          pane: memoState.panes[paneType],
        });
      }
    });

    return memoState;
  }, [props.views, props.modules]);

  const [state, dispatch] = useReducer(reducer, initialState);

  // launch deep links
  useEffect(() => {
    setTimeout(() => {
      const queryString = location.search;
      dispatch({
        type: 'launchDeepLinks',
        queryString,
      });
    }, 200);
  }, []);

  return (
    <ShellStateContext.Provider value={state}>
      <ShellDispatchContext.Provider value={dispatch}>
        <LoggerState>
          <SearchState>{props.children}</SearchState>
        </LoggerState>
      </ShellDispatchContext.Provider>
    </ShellStateContext.Provider>
  );
}

export function useShellState(): UseShellState {
  const state = useContext(ShellStateContext);
  return state;
}

export function useShellDispatch(): Dispatch<ShellAction> {
  const dispatch = useContext(ShellDispatchContext);
  return dispatch;
}

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
