/*
Copyright 2024 Comcast Cable Communications Management, LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
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
      entityTypeMenuText: 'Acct {accountId}',
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
