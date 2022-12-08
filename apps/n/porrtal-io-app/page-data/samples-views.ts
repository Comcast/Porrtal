/*
Copyright 2022 Comcast Cable Communications Management, LLC

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

export const samplesViews: View[] = [
  {
    displayText: 'Create Account',
    displayIcon: 'mugshot',
    componentName: 'AccountCreate',
    componentModule: () => import('@porrtal-components/r-quick-start-demo'),
  },
  {
    key: 'Account {accountId}',
    displayText: 'Account {accountId}',
    displayIcon: 'mugshot',
    componentName: 'AccountDetail',
    entityType: 'account',
    componentModule: () => import('@porrtal-components/r-quick-start-demo'),
  },
  {
    key: 'Billing {accountId}',
    displayText: 'Billing {accountId}',
    displayIcon: 'mugshot',
    componentName: 'AccountBillingHistory',
    entityType: 'account',
    componentModule: () => import('@porrtal-components/r-quick-start-demo'),
  },
  {
    key: 'AccountNav',
    launchAtStartup: true,
    displayText: 'Account Navigation',
    paneType: 'nav',
    displayIcon: 'mugshot',
    userInfo: [
      {
        viewId: 'info-markdown',
        state: {
          displayText: 'User Docs',
          displayIcon: 'manual',
          contentUrl:
            'https://raw.githubusercontent.com/datumgeek/jersey-rest-test03/master/README.md',
        },
      },
      {
        viewId: 'info-youtube',
        state: {
          displayText: 'User Video',
          displayIcon: 'mobile-video',
          videoId: 'Z76QlSpYcck',
        },
      },
    ],
    devInfo: [
      {
        viewId: 'info-markdown',
        state: {
          displayText: 'Dev Docs',
          displayIcon: 'manual',
          contentUrl:
            'https://raw.githubusercontent.com/datumgeek/jersey-rest-test03/master/README.md',
        },
      },
      {
        viewId: 'info-youtube',
        state: {
          displayText: 'Dev Video',
          displayIcon: 'mobile-video',
          videoId: 'Z76QlSpYcck',
        },
      },
    ],
    componentName: 'AccountNav',
    componentModule: () => import('@porrtal-components/r-quick-start-demo'),
  },
  {
    key: 'AccountSearch',
    launchAtStartup: true,
    displayText: 'Account',
    paneType: 'search',
    displayIcon: 'mugshot',
    componentName: 'AccountSearch',
    componentModule: () => import('@porrtal-components/r-quick-start-demo'),
  },
  {
    displayText: 'Create Appointment',
    displayIcon: 'calendar',
    componentName: 'AppointmentCreate',
    componentModule: () => import('@porrtal-components/r-quick-start-demo'),
  },
  {
    key: 'Appointment {appointmentId}',
    displayText: 'Appointment {appointmentId}',
    displayIcon: 'calendar',
    componentName: 'AppointmentDetail',
    componentModule: () => import('@porrtal-components/r-quick-start-demo'),
  },
  {
    key: 'AppointmentLocationMap {appointmentId}',
    displayText: 'Map {appointmentId}',
    displayIcon: 'calendar',
    componentName: 'AppointmentLocationMap',
    componentModule: () => import('@porrtal-components/r-quick-start-demo'),
  },
  {
    key: 'AppointmentNav',
    launchAtStartup: true,
    displayText: 'Appointment Navigation',
    paneType: 'nav',
    displayIcon: 'calendar',
    componentName: 'AppointmentNav',
    componentModule: () => {
      console.log('appointment nav component module function called...');
      return import('@porrtal-components/r-quick-start-demo');
    },
  },
  {
    key: 'AppointmentSearch',
    launchAtStartup: true,
    displayText: 'Appointment',
    paneType: 'search',
    displayIcon: 'calendar',
    componentName: 'AppointmentSearch',
    componentModule: () => import('@porrtal-components/r-quick-start-demo'),
  },
  {
    key: 'AppointmentNav',
    launchAtStartup: true,
    displayText: 'Appointment Navigation',
    paneType: 'nav',
    displayIcon: 'calendar',
    componentName: 'AppointmentNav',
    componentModule: () => import('@porrtal-components/r-quick-start-demo'),
  },
  {
    key: 'VizNav',
    launchAtStartup: true,
    displayText: 'Viz Demos',
    paneType: 'nav',
    displayIcon: 'map',
    componentName: 'VizNav',
    componentModule: () => import('@porrtal-components/r-quick-start-demo'),
  },
  {
    displayText: 'Buildings',
    displayIcon: 'office',
    componentName: 'BuildingSceneWithQuery',
    componentModule: () => import('@porrtal-components/r-quick-start-demo'),
  },
  {
    displayText: 'Earth',
    displayIcon: 'globe',
    componentName: 'DigitalElevationMap',
    componentModule: () => import('@porrtal-components/r-quick-start-demo'),
  },
  {
    displayText: 'Hurricane',
    displayIcon: 'git-commit',
    componentName: 'HurricaneMap',
    componentModule: () => import('@porrtal-components/r-quick-start-demo'),
  },
  {
    displayText: 'Earthquake',
    displayIcon: 'inner-join',
    componentName: 'EarthquakeMap',
    componentModule: () => import('@porrtal-components/r-quick-start-demo'),
  },
  {
    displayText: 'Collapse Tree Chart',
    displayIcon: 'diagram-tree',
    componentName: 'CollapsibleTree',
    componentModule: () => import('@porrtal-components/r-quick-start-demo'),
  },
  {
    displayText: 'Bar Chart',
    displayIcon: 'diagram-tree',
    componentName: 'HierarchicalBarChart',
    componentModule: () => import('@porrtal-components/r-quick-start-demo'),
  },
  {
    displayText: 'Icicle Chart',
    displayIcon: 'diagram-tree',
    componentName: 'ZoomableIcicle',
    componentModule: () => import('@porrtal-components/r-quick-start-demo'),
  },
  {
    displayText: 'Sunburst Chart',
    displayIcon: 'diagram-tree',
    componentName: 'ZoomableSunburst',
    componentModule: () => import('@porrtal-components/r-quick-start-demo'),
  },
  {
    displayText: 'Treemap Chart',
    displayIcon: 'diagram-tree',
    componentName: 'ZoomableTreemap',
    componentModule: () => import('@porrtal-components/r-quick-start-demo'),
  },
  {
    displayText: 'Circle Pack Chart',
    displayIcon: 'diagram-tree',
    componentName: 'ZoomableCirclePack',
    componentModule: () => import('@porrtal-components/r-quick-start-demo'),
  },
  {
    displayText: 'YouTube Player',
    displayIcon: 'mobile-video',
    componentName: 'YoutubePlayer',
    componentModule: () => import('@porrtal-components/r-learning'),
  },
  {
    key: 'md{id}',
    displayText: 'Markdown Viewer',
    displayIcon: 'book',
    componentName: 'MarkdownViewer',
    componentModule: () => import('@porrtal-components/r-learning'),
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
