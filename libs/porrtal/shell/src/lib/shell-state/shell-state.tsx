import { ViewComponentFunction, ViewPane, ViewState } from '@porrtal/api';
import {
  useReducer,
  Reducer,
  Dispatch,
  createContext,
  useContext,
  useMemo,
} from 'react';

export type ComponentFactoryDictionary = {
  [componentName: string]: ViewComponentFunction;
};

export interface UseShellState {
  navItems: ViewState[];
  mainItems: ViewState[];
  rightItems: ViewState[];
  bottomItems: ViewState[];
  searchItems: ViewState[];
  components: ComponentFactoryDictionary;
}

export type ShellAction =
  | { type: 'launchViewState'; viewState: ViewState }
  | {
      type: 'registerComponent';
      componentRegistration: {
        componentName: string;
        viewComponentFunction: ViewComponentFunction;
      };
    };

const reducer: Reducer<UseShellState, ShellAction> = (state, action) => {
  switch (action.type) {
    case 'launchViewState':
      switch (action.viewState.viewPane) {
        case 'nav':
          return {
            ...state,
            navItems: [
              ...state.navItems,
              {
                ...action.viewState,
                componentImport:
                  state.components[action.viewState.componentName],
              },
            ],
          };

        case 'main':
          return {
            ...state,
            mainItems: [
              ...state.mainItems,
              {
                ...action.viewState,
                componentImport:
                  state.components[action.viewState.componentName],
              },
            ],
          };

        case 'right':
          return {
            ...state,
            rightItems: [
              ...state.rightItems,
              {
                ...action.viewState,
                componentImport:
                  state.components[action.viewState.componentName],
              },
            ],
          };

        case 'bottom':
          return {
            ...state,
            bottomItems: [
              ...state.bottomItems,
              {
                ...action.viewState,
                componentImport:
                  state.components[action.viewState.componentName],
              },
            ],
          };
      }
      break;

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

// arg to createContext is used if no provider is defined https://stackoverflow.com/q/49949099/7085047
const ShellStateContext = createContext<UseShellState>({
  navItems: [] as ViewState[],
  mainItems: [] as ViewState[],
  rightItems: [] as ViewState[],
  bottomItems: [] as ViewState[],
  searchItems: [] as ViewState[],
  components: {},
});

// arg to createContext is used if no provider is defined https://stackoverflow.com/q/49949099/7085047
const ShellDispatchContext = createContext<Dispatch<ShellAction>>(
  (value: ShellAction) => {
    return;
  }
);

export interface ShellStateProps {
  views?: ViewState[];
  components: ComponentFactoryDictionary;
  children?: React.ReactChild | React.ReactChild[];
}

export function ShellState(props: ShellStateProps) {
  const initialState = useMemo(() => {
    let memoState = {
      navItems: [] as ViewState[],
      mainItems: [] as ViewState[],
      rightItems: [] as ViewState[],
      bottomItems: [] as ViewState[],
      searchItems: [] as ViewState[],
      components: props.components,
    };

    props.views?.forEach(
      (view) =>
        (memoState = reducer(memoState, {
          type: 'launchViewState',
          viewState: view,
        }))
    );

    return memoState;
  }, [props.views, props.components]);

  console.log('initialState', initialState);

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ShellStateContext.Provider value={state}>
      <ShellDispatchContext.Provider value={dispatch}>
        {props.children}
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
