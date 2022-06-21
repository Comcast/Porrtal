// import { ViewComponentFunction, ViewState } from '@porrtal/api';
// import { useReducer, Reducer, Dispatch, createContext } from 'react';

// // eslint-disable-next-line @typescript-eslint/no-empty-interface
// export interface UseShellDispatch {
//   dispatch: Dispatch<ShellAction>;
// }

// export type ComponentFactoryDictionary = {
//   [componentName: string]: () => void;
// };

// export interface UseShellState {
//   navItems: ViewState[];
//   mainItems: ViewState[];
//   rightItems: ViewState[];
//   bottomItems: ViewState[];
//   searchItems: ViewState[];
//   componentFactoryDictionary: ComponentFactoryDictionary;
// }

// export type ShellAction =
//   | { type: 'launchViewState', viewState: ViewState }
//   | { type: 'registerComponent', componentRegistration: { componentName: string, viewComponentFunction: ViewComponentFunction }}

// const reducer: Reducer<UseShellState, ShellAction> = (state, action) => {
//   switch (action.type) {
//     case 'launchViewState':
//       switch (action.viewState.viewPane) {

//         case 'nav':
//           return {
//             ...state,
//             navItems: [
//               ...state.navItems,
//               action.viewState
//             ]
//           }

//         case 'main':
//           return {
//             ...state,
//             mainItems: [
//               ...state.mainItems,
//               action.viewState
//             ]
//           }

//           case 'right':
//             return {
//               ...state,
//               rightItems: [
//                 ...state.rightItems,
//                 action.viewState
//               ]
//             }

//             case 'bottom':
//               return {
//                 ...state,
//                 bottomItems: [
//                   ...state.bottomItems,
//                   action.viewState
//                 ]
//               }

//             }
//       break;

//     case 'registerComponent':
//       return {
//         ...state,
//         componentFactoryDictionary: {
//           ...state.componentFactoryDictionary,
//           [action.componentRegistration.componentName]: action.componentRegistration.viewComponentFunction
//         }
//       }
//   }
//   return state;
// }

// // arg to createContext is used if no provider is defined https://stackoverflow.com/q/49949099/7085047
// export const ShellState = createContext<UseShellState>({
//   navItems: [] as ViewState[],
//   mainItems: [] as ViewState[],
//   rightItems: [] as ViewState[],
//   bottomItems: [] as ViewState[],
//   searchItems: [] as ViewState[],
//   componentFactoryDictionary: {}
// })

// // arg to createContext is used if no provider is defined https://stackoverflow.com/q/49949099/7085047
// export const ShellDispatch = createContext<Dispatch<ShellAction>>((value: ShellAction) => { return; });

// export function useShell(initalState: UseShellState): UseShellState {
//   const [state, dispatch] = useReducer(reducer, initalState ?? {
//     navItems: [] as ViewState[],
//     mainItems: [] as ViewState[],
//     rightItems: [] as ViewState[],
//     bottomItems: [] as ViewState[],
//     searchItems: [] as ViewState[],
//     componentFactoryDictionary: {}
//   } as UseShellState);

//   return { state, dispatch };
// }
