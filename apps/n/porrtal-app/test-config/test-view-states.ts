/*
Copyright 2023 Comcast Cable Communications Management, LLC

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
import { View, ViewComponentModules } from '@porrtal/r-api';

export const testModules: ViewComponentModules = {
  '@porrtal-components/r-first-test-comp-lib': () =>
    import('@porrtal-components/r-first-test-comp-lib'),
  '@porrtal-components/r-second-test-comp-lib': () =>
    import('@porrtal-components/r-second-test-comp-lib'),
};

export const testViews: View[] = [
  {
    viewId: 'one-nav',
    paneType: 'nav',
    launchAtStartup: true,
    componentName: 'TestCompsFirstTestComp',
    componentModule: '@porrtal-components/r-first-test-comp-lib',
    key: 'one-nav',
    displayText: 'one',
    displayIcon: 'home',
  },
  {
    viewId: 'two-nav',
    paneType: 'nav',
    launchAtStartup: true,
    componentName: 'TestCompsFirstTestComp',
    componentModule: '@porrtal-components/r-first-test-comp-lib',
    key: 'two-nav',
    displayText: 'two',
    displayIcon: 'settings',
  },
  {
    viewId: 'one-main',
    paneType: 'main',
    launchAtStartup: true,
    componentName: 'TestCompsFirstTestComp',
    componentModule: '@porrtal-components/r-first-test-comp-lib',
    key: 'one-main',
    displayText: 'one',
    displayIcon: 'home',
    menu: 'one',
    userInfo: [
      {
        viewId: 'info-markdown',
        state: {
          displayText: 'User Docs',
          displayIcon: 'menu_book',
          contentUrl:
            'https://raw.githubusercontent.com/datumgeek/jersey-rest-test03/master/README.md',
        },
      },
      {
        viewId: 'info-youtube',
        state: {
          displayText: 'User Video',
          displayIcon: 'videocam',
          videoId: 'Z76QlSpYcck',
        },
      },
    ],
    devInfo: [
      {
        viewId: 'info-markdown',
        state: {
          displayText: 'Dev Docs',
          displayIcon: 'menu_book',
          contentUrl:
            'https://raw.githubusercontent.com/datumgeek/jersey-rest-test03/master/README.md',
        },
      },
      {
        viewId: 'info-youtube',
        state: {
          displayText: 'Dev Video',
          displayIcon: 'videocam',
          videoId: 'Z76QlSpYcck',
        },
      },
    ],
  },
  {
    viewId: 'account-one',
    paneType: 'main',
    launchAtStartup: false,
    componentName: 'TestCompsFirstTestComp',
    componentModule: '@porrtal-components/r-first-test-comp-lib',
    entityType: 'account',
    key: 'account-one',
    displayText: 'account-one',
    displayIcon: 'settings',
  },
  {
    viewId: 'account-two',
    paneType: 'main',
    launchAtStartup: false,
    componentName: 'TestCompsFirstTestComp',
    componentModule: '@porrtal-components/r-first-test-comp-lib',
    entityType: 'account',
    key: 'account-two',
    displayText: 'account-two',
    displayIcon: 'settings',
  },
  {
    viewId: 'appointment-one',
    paneType: 'main',
    launchAtStartup: false,
    componentName: 'TestCompsFirstTestComp',
    componentModule: '@porrtal-components/r-first-test-comp-lib',
    entityType: 'appointment',
    key: 'appointment-one',
    displayText: 'appointment-one',
    displayIcon: 'settings',
  },
  {
    viewId: 'three-main',
    paneType: 'main',
    launchAtStartup: true,
    componentName: 'TestCompsFirstTestComp',
    componentModule: '@porrtal-components/r-first-test-comp-lib',
    key: 'three-main',
    menu: 'inline.three',
    displayText: 'three',
    displayIcon: 'account_circle',
  },
  {
    viewId: 'first-test-comp',
    paneType: 'main',
    launchAtStartup: true,
    componentName: 'TestCompsFirstTestComp',
    componentModule: '@porrtal-components/r-first-test-comp-lib',
    key: 'first-test-comp',
    displayText: '@porrtal-components/r-first-test-comp-lib',
    displayIcon: 'power',
  },
  {
    viewId: 'first-search-comp',
    paneType: 'search',
    launchAtStartup: true,
    componentName: 'TestCompsFirstTestComp',
    componentModule: '@porrtal-components/r-first-test-comp-lib',
    key: 'first-search-comp',
    displayText: 'find stuff',
    displayIcon: 'power',
    userInfo: [
      {
        viewId: 'info-markdown',
        state: {
          displayText: 'User Docs',
          displayIcon: 'menu_book',
          contentUrl:
            'https://raw.githubusercontent.com/datumgeek/jersey-rest-test03/master/README.md',
        },
      },
      {
        viewId: 'info-youtube',
        state: {
          displayText: 'User Video',
          displayIcon: 'videocam',
          videoId: 'Z76QlSpYcck',
        },
      },
    ],
  },
  {
    viewId: 'info-markdown',
    displayText: '{displayText}',
    displayIcon: '{displayIcon}',
    paneType: 'right',
    componentName: 'MarkdownViewer',
    componentModule: () => import('@porrtal-components/r-learning'),
  },
  {
    viewId: 'info-youtube',
    displayText: '{displayText}',
    displayIcon: '{displayIcon}',
    paneType: 'right',
    componentName: 'YoutubePlayer',
    componentModule: () => import('@porrtal-components/r-learning'),
  },
];
