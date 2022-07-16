import {
  ViewComponentFunction,
  ViewState,
  Panes,
  PaneType,
  Pane,
  paneTypes,
  PaneArrangement,
} from '@porrtal/api';
import {
  useReducer,
  Reducer,
  Dispatch,
  createContext,
  useContext,
  useMemo,
  PropsWithChildren,
} from 'react';
import { StateObject } from '@porrtal/api';
import { replaceParameters } from '../shell-utilities/shell-utilities';
import SearchState from '../search-state/search-state';

export type ComponentFactoryDictionary = {
  [componentName: string]: ViewComponentFunction;
};

export interface UseShellState {
  panes: Panes;
  components: ComponentFactoryDictionary;
}

export type ShellAction =
  | { type: 'launchViewState'; viewState: ViewState; state?: StateObject }
  | { type: 'moveView'; key: string; toPane: PaneType }
  | { type: 'deleteViewState'; key: string }
  | { type: 'setCurrentViewStateByKey'; key: string; pane: Pane }
  | { type: 'arrangePane'; pane: Pane; paneArrangement: PaneArrangement }
  | {
      type: 'registerComponent';
      componentRegistration: {
        componentName: string;
        viewComponentFunction: ViewComponentFunction;
      };
    };

const reducer: Reducer<UseShellState, ShellAction> = (state, action) => {
  console.log('reducer', state, action);
  switch (action.type) {
    case 'launchViewState': {
      let retState: UseShellState = state;
      const newViewStateState = combineViewStateStateAndActionState(
        action.viewState.state,
        action.state
      );
      const newDisplayTextResult = replaceParameters(
        action.viewState.displayText,
        newViewStateState ?? {}
      );
      const newViewState: ViewState = {
        ...action.viewState,
        displayText: newDisplayTextResult.replaced,
        state: newViewStateState,
      };

      // see if the key exists already (replace it if so)
      if (
        paneTypes.some((paneType) => {
          const ii = state.panes[paneType].viewStates.findIndex(
            (vs) => vs.key === newViewState.key
          );
          if (ii >= 0) {
            newViewState.componentImport =
              state.components[newViewState.componentName];
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
      newViewState.componentImport =
        state.components[newViewState.componentName];
      retState = {
        ...state,
        panes: {
          ...state.panes,
          [action.viewState.paneType]: {
            ...state.panes[action.viewState.paneType],
            currentKey: action.viewState.key,
            viewStates: [...viewStates, newViewState],
            paneType: action.viewState.paneType,
          },
        },
      };
      return retState;
    }

    case 'moveView': {
      let retState = state;
      let foundView: ViewState | undefined;

      paneTypes.some((paneType) => {
        foundView = state.panes[paneType].viewStates.find(
          (vs) => vs.key === action.key
        );
        if (foundView) {
          if (paneType === action.toPane) {
            return true;
          }

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
                  foundView,
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

    case 'registerComponent':
      return {
        ...state,
        components: {
          ...state.components,
          [action.componentRegistration.componentName]:
            action.componentRegistration.viewComponentFunction,
        },
      };
  }
  return state;
};

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
  components: {},
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
  views?: ViewState[];
  components: ComponentFactoryDictionary;
}

export function ShellState(props: PropsWithChildren<ShellStateProps>) {
  const initialState: UseShellState = useMemo(() => {
    let memoState = {
      ...emptyUseShellState,
      components: props.components,
    };

    props.views?.forEach(
      (view) =>
        (memoState = reducer(memoState, {
          type: 'launchViewState',
          viewState: view,
        }))
    );

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
  }, [props.views, props.components]);

  console.log('initialState', initialState);

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ShellStateContext.Provider value={state}>
      <ShellDispatchContext.Provider value={dispatch}>
        <SearchState>{props.children}</SearchState>
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
