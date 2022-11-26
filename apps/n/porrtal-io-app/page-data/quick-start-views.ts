import { View } from '@porrtal/r-api';

export const getQuickStartViews = (uiLib: string): View[] => {
  const libImport =
    uiLib === 'blueprint'
      ? () => import('@porrtal-components/r-quick-start-blueprint')
      : () => import('@porrtal-components/r-quick-start-material');

  const addIconName =
    uiLib === 'blueprint'
      ? 'add' 
      : 'add_circle_icon';

  const personIconName =
    uiLib === 'blueprint'
      ? 'mugshot' 
      : 'account_box';

  const pathSearchIconName = 
    uiLib === 'blueprint'
      ? 'path-search'
      : 'travel_explore'
  
    return [
    {
      viewId: 'NewAccount',
      displayText: 'Create Account',
      displayIcon: addIconName,
      componentName: 'AccountCreate',
      componentModule: libImport,
    },
    {
      key: 'Account {accountId}',
      displayText: 'Account {accountId}',
      displayIcon: personIconName,
      componentName: 'AccountDetail',
      entityType: 'account',
      componentModule: libImport,
    },
    {
      key: 'Billing {accountId}',
      displayText: 'Billing {accountId}',
      displayIcon: personIconName,
      componentName: 'AccountBillingHistory',
      entityType: 'account',
      componentModule: libImport,
    },
    {
      key: 'DocsNav',
      launchAtStartup: true,
      displayText: 'Quick Start',
      paneType: 'nav',
      displayIcon: pathSearchIconName,
      componentName: 'DocsNav',
      componentModule: libImport,
    },
    {
      key: 'AccountNav',
      launchAtStartup: true,
      displayText: 'Account Navigation',
      paneType: 'nav',
      displayIcon: personIconName,
      componentName: 'AccountNav',
      componentModule: libImport,
    },
    {
      key: 'AccountSearch',
      launchAtStartup: true,
      displayText: 'Account Search',
      paneType: 'search',
      displayIcon: personIconName,
      componentName: 'AccountSearch',
      componentModule: libImport,
    },
  ];
};
