import { View } from '@porrtal/api';
import { ComponentFactoryDictionary } from '@porrtal/shell';

export const testComponents: ComponentFactoryDictionary = {
  '@test-comps/first-test-comp': () => {
    const ret = import('@test-comps/first-test-comp').then((module) => ({
      default: module.TestCompsFirstTestComp,
    }));
    return ret;
  },

  '@test-comps/second-test-comp': () => import('@test-comps/second-test-comp'),
};

export const testViews: View[] = [
  {
    viewId: 'one-nav',
    paneType: 'nav',
    launchAtStartup: true,
    componentName: '@test-comps/first-test-comp',
    keyTemplate: 'one-nav',
    displayTextTemplate: 'one',
    displayIconTemplate: 'home',
  },
  {
    viewId: 'two-nav',
    paneType: 'nav',
    launchAtStartup: true,
    componentName: '@test-comps/first-test-comp',
    keyTemplate: 'two-nav',
    displayTextTemplate: 'two',
    displayIconTemplate: 'settings',
  },
  {
    viewId: 'one-main',
    paneType: 'main',
    launchAtStartup: true,
    componentName: '@test-comps/first-test-comp',
    keyTemplate: 'one-main',
    displayTextTemplate: 'one',
    displayIconTemplate: 'home',
  },
  {
    viewId: 'two-main',
    paneType: 'main',
    launchAtStartup: true,
    componentName: '@test-comps/first-test-comp',
    keyTemplate: 'two-main',
    displayTextTemplate: 'two',
    displayIconTemplate: 'settings',
  },
  {
    viewId: 'three-main',
    paneType: 'main',
    launchAtStartup: true,
    componentName: '@test-comps/first-test-comp',
    keyTemplate: 'three-main',
    displayTextTemplate: 'three',
    displayIconTemplate: 'account_circle',
  },
  {
    viewId: 'first-test-comp',
    paneType: 'main',
    launchAtStartup: true,
    componentName: '@test-comps/first-test-comp',
    keyTemplate: 'first-test-comp',
    displayTextTemplate: '@test-comps/first-test-comp',
    displayIconTemplate: 'power',
  },
  {
    viewId: 'first-search-comp',
    paneType: 'search',
    launchAtStartup: true,
    componentName: '@test-comps/first-test-comp',
    keyTemplate: 'first-search-comp',
    displayTextTemplate: 'find stuff',
    displayIconTemplate: 'power',
  },
];
