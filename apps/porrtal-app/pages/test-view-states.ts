import { ViewComponentFunction } from '@porrtal/api';
import { ViewState } from '@porrtal/api';
import { UseShellState } from '@porrtal/shell';

export const testComponents = {
  "@test-comps/first-test-comp": (
    () => import('@test-comps/first-test-comp')
      ) as unknown as ViewComponentFunction
}

export const testViews: ViewState[] = [
  {
    key: 'one-nav',
    componentName: '@test-comps/first-test-comp',
    viewPane: 'nav',
    displayText: 'one',
    displayIcon: 'home'
  },
  {
    key: 'two-nav',
    componentName: '@test-comps/first-test-comp',
    viewPane: 'nav',
    displayText: 'two',
    displayIcon: 'settings'
  },
  {
    key: 'one-main',
    componentName: '@test-comps/first-test-comp',
    viewPane: 'main',
    displayText: 'one',
    displayIcon: 'home'
  },
  {
    key: 'two-main',
    componentName: '@test-comps/first-test-comp',
    viewPane: 'main',
    displayText: 'two',
    displayIcon: 'settings'
  },
  {
    key: 'three-main',
    componentName: '@test-comps/first-test-comp',
    viewPane: 'main',
    displayText: 'three',
    displayIcon: 'account_circle'
  },
  {
    key: 'first-test-comp',
    componentName: '@test-comps/first-test-comp',
    viewPane: 'main',
    displayText: '@test-comps/first-test-comp',
    displayIcon: 'power'
  }
]

export const testNavItems = [
  {
    key: 'one-nav',
    componentName: 'one',
    componentImport: testComponents['@test-comps/first-test-comp'],
    displayText: 'one',
    displayIcon: 'home'
  },
  {
    key: 'two-nav',
    componentName: 'two',
    componentImport: testComponents['@test-comps/first-test-comp'],
    displayText: 'two',
    displayIcon: 'settings'
  }
] as ViewState[]

export const testMainItems = [
  {
    key: 'one-main',
    componentName: 'one',
    componentImport: testComponents['@test-comps/first-test-comp'],
    displayText: 'one',
    displayIcon: 'home'
  },
  {
    key: 'two-main',
    componentName: 'two',
    componentImport: testComponents['@test-comps/first-test-comp'],
    displayText: 'two',
    displayIcon: 'settings'
  },
  {
    key: 'three-main',
    componentName: 'three',
    componentImport: testComponents['@test-comps/first-test-comp'],
    displayText: 'three',
    displayIcon: 'account_circle'
  },
  {
    key: 'first-test-comp',
    componentName: '@test-comps/first-test-comp',
    componentImport: testComponents['@test-comps/first-test-comp'],
    displayText: '@test-comps/first-test-comp',
    displayIcon: 'power'
  }
] as ViewState[]

export const testPorrtalShellState: UseShellState = {
  navItems: testNavItems,
  mainItems: testMainItems,
  rightItems: [],
  bottomItems: [],
  searchItems: [],
  componentFactoryDictionary: {}
}
