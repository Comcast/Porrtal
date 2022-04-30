import { PorrtalViewComponentFunction, PorrtalViewPane, ViewState } from '@porrtal/api';
import { useReducer, Reducer, Dispatch, createContext } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UsePorrtalShell {
  state: UsePorrtalShellState;
  dispatch: Dispatch<PorrtalShellAction>;
}

export interface UsePorrtalShellState {
  navItems: ViewState[];
  mainItems: ViewState[];
  rightItems: ViewState[];
  bottomItems: ViewState[];
  searchItems: ViewState[];
  componentFactoryDictionary: {
    [componentName: string]: () => void;
  };
}

export type PorrtalShellAction =
  | { type: 'launchViewState', viewState: ViewState }
  | { type: 'registerComponent', componentRegistration: { componentName: string, porrtalViewComponentFunction: PorrtalViewComponentFunction }}

const reducer: Reducer<UsePorrtalShellState, PorrtalShellAction> = (state, action) => {
  switch (action.type) {
    case 'launchViewState':
      switch (action.viewState.porrtalViewPane) {

        case 'nav':
          return {
            ...state,
            navItems: [
              ...state.navItems,
              action.viewState
            ]
          }

        case 'main':
          return {
            ...state,
            mainItems: [
              ...state.mainItems,
              action.viewState
            ]
          }

      }
      break;

    case 'registerComponent':
      return {
        ...state,
        componentFactoryDictionary: {
          ...state.componentFactoryDictionary,
          [action.componentRegistration.componentName]: action.componentRegistration.porrtalViewComponentFunction
        }
      }
  }
  return state;
}

// arg to createContext is used if no provider is defined https://stackoverflow.com/q/49949099/7085047
export const PorrtalShellState = createContext<UsePorrtalShellState>({
  navItems: [] as ViewState[],
  mainItems: [] as ViewState[],
  rightItems: [] as ViewState[],
  bottomItems: [] as ViewState[],
  searchItems: [] as ViewState[],
  componentFactoryDictionary: {}
})

// arg to createContext is used if no provider is defined https://stackoverflow.com/q/49949099/7085047
export const PorrtalShellDispatch = createContext<Dispatch<PorrtalShellAction>>((value: PorrtalShellAction) => { return; });

export function usePorrtalShell(initalState: UsePorrtalShellState): UsePorrtalShell {
  const [state, dispatch] = useReducer(reducer, initalState ?? {
    navItems: [] as ViewState[],
    mainItems: [] as ViewState[],
    rightItems: [] as ViewState[],
    bottomItems: [] as ViewState[],
    searchItems: [] as ViewState[],
    componentFactoryDictionary: {}
  } as UsePorrtalShellState);

  return { state, dispatch };
}

export default usePorrtalShell;
