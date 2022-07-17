import { ViewComponentFunction } from '@porrtal/api';
import { ViewState } from '@porrtal/api';

export const testComponents = {
  '@test-comps/first-test-comp': (() =>
    import('@test-comps/first-test-comp')) as unknown as ViewComponentFunction,
  '@test-comps/second-test-comp': (() =>
    import('@test-comps/second-test-comp')) as unknown as ViewComponentFunction,
};

export const testViews: ViewState[] = [
  {
    key: 'one-nav',
    componentName: '@test-comps/first-test-comp',
    paneType: 'nav',
    displayText: 'one',
    displayIcon: 'home',
  },
  {
    key: 'two-nav',
    componentName: '@test-comps/first-test-comp',
    paneType: 'nav',
    displayText: 'two',
    displayIcon: 'settings',
  },
  {
    key: 'one-main',
    componentName: '@test-comps/first-test-comp',
    paneType: 'main',
    displayText: 'one',
    displayIcon: 'home',
  },
  {
    key: 'two-main',
    componentName: '@test-comps/first-test-comp',
    paneType: 'main',
    displayText: 'two',
    displayIcon: 'settings',
  },
  {
    key: 'three-main',
    componentName: '@test-comps/first-test-comp',
    paneType: 'main',
    displayText: 'three',
    displayIcon: 'account_circle',
  },
  {
    key: 'first-test-comp',
    componentName: '@test-comps/first-test-comp',
    paneType: 'main',
    displayText: '@test-comps/first-test-comp',
    displayIcon: 'power',
  },
  {
    key: 'first-search-comp',
    componentName: '@test-comps/first-test-comp',
    paneType: 'search',
    displayText: 'find stuff',
    displayIcon: 'power',
  },
];
