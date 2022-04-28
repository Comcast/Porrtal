import { useState, useCallback } from 'react';
import { testComponents, testMainItems, testNavItems } from './test-view-states';
import { ViewState } from '@porrtal/api';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseViewStates extends ShellPaneItems {
  launchViewState: (viewState: ViewState, pane: ShellPane) => void;
  registerComponentFactory: (componentName: string, componentFactory: () => void) => void;
}

export interface ShellPaneItems {
  navItems: ViewState[];
  mainItems: ViewState[];
  rightItems: ViewState[];
  bottomItems: ViewState[];
  searchItems: ViewState[];
  componentFactoryDictionary: {
    [componentName: string]: () => void;
  };
}

export type ShellPane = 'nav' | 'main' | 'right' | 'bottom' | 'search';

export interface PorrtalComponentProps {
  viewState: ViewState;
}

export function useViewStates(): UseViewStates {
  const [shellPaneItems, setShellPaneItems] = useState({
    navItems: [...testNavItems] as ViewState[],
    mainItems: [...testMainItems] as ViewState[],
    rightItems: [] as ViewState[],
    bottomItems: [] as ViewState[],
    searchItems: [] as ViewState[],
    componentFactoryDictionary: {...testComponents}
  } as ShellPaneItems);

  const launchViewState = useCallback((viewState: ViewState) =>
    setShellPaneItems((origShellPaneItems: ShellPaneItems) => ({
      ...origShellPaneItems,
      navItems: [...origShellPaneItems.navItems, viewState]
  })), []);

  const registerComponentFactory = useCallback((componentName: string, componentFactory: () => void) => {
    setShellPaneItems((origShellPaneItems: ShellPaneItems) => ({
      ...origShellPaneItems,
      componentFactoryDictionary: {...origShellPaneItems.componentFactoryDictionary, [componentName]: componentFactory}
    }))
  }, [])

  return { ...shellPaneItems, launchViewState, registerComponentFactory, componentFactoryDictionary: {} };
}

export default useViewStates;
