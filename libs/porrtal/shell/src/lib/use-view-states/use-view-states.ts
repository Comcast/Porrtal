import { useState, useCallback } from 'react';
import { testMainItems, testNavItems } from './test-view-states';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseViewStates extends ShellPaneItems {
  launchViewState: (viewState: ViewState, pane: ShellPane) => void;
}

export interface ShellPaneItems {
  navItems: ViewState[];
  mainItems: ViewState[];
  rightItems: ViewState[];
  bottomItems: ViewState[];
  searchItems: ViewState[];
}

export interface ViewState {
  key: string;
  componentName: string;
  displayText: string;
  displayIcon: string;
}

export type ShellPane = 'nav' | 'main' | 'right' | 'bottom' | 'search';

export function useViewStates(): UseViewStates {
  const [shellPaneItems, setShellPaneItems] = useState({
    navItems: [...testNavItems] as ViewState[],
    mainItems: [...testMainItems] as ViewState[],
    rightItems: [] as ViewState[],
    bottomItems: [] as ViewState[],
    searchItems: [] as ViewState[]
  } as ShellPaneItems);

  const launchViewState = useCallback((viewState: ViewState) =>
    setShellPaneItems((origShellPaneItems: ShellPaneItems) => ({
      ...origShellPaneItems,
      navItems: [...origShellPaneItems.navItems, viewState]
  })), []);
  return { ...shellPaneItems, launchViewState };
}

export default useViewStates;
