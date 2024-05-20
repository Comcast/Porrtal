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

export const porrtalIoViews: View[] = [
  {
    displayText: 'porrtal.io navigation',
    displayIcon: 'path-search',
    componentName: 'Nav',
    paneType: 'nav',
    launchAtStartup: true,
    componentModule: () => import('@porrtal-components/r-porrtal-io'),
  },
  {
    viewId: 'Welcome',
    displayText: 'Welcome !!',
    displayIcon: 'clean',
    componentName: 'MarkdownViewer',
    paneType: 'main',
    launchAtStartup: true,
    componentModule: () => import('@porrtal-components/r-learning'),
    state: {
      contentUrl: '/docs/porrtal-components-r-porrtal-io/welcome/welcome.md'
    }
  },
  {
    viewId: 'Features',
    displayText: 'Features',
    displayIcon: 'clean',
    componentName: 'MarkdownViewer',
    paneType: 'main',
    componentModule: () => import('@porrtal-components/r-learning'),
    state: {
      contentUrl: '/docs/porrtal-components-r-porrtal-io/features/features.md'
    },
  },
  {
    viewId: 'GettingStarted',
    displayText: 'Getting Started',
    displayIcon: 'clean',
    componentName: 'MarkdownViewer',
    paneType: 'main',
    componentModule: () => import('@porrtal-components/r-learning'),
    state: {
      contentUrl: '/docs/porrtal-components-r-porrtal-io/getting-started/getting-started.md'
    },
  },
  {
    viewId: 'Docs',
    displayText: 'Docs',
    displayIcon: 'clean',
    componentName: 'Docs',
    paneType: 'main',
    componentModule: () => import('@porrtal-components/r-porrtal-io'),
  },
  {
    viewId: 'Events',
    displayText: 'Events',
    displayIcon: 'clean',
    componentName: 'Events',
    paneType: 'main',
    componentModule: () => import('@porrtal-components/r-porrtal-io'),
  },
  {
    viewId: 'Resources',
    displayText: 'Resources',
    displayIcon: 'clean',
    componentName: 'Resources',
    paneType: 'main',
    componentModule: () => import('@porrtal-components/r-porrtal-io'),
  },
  {
    viewId: 'BLOG',
    displayText: 'BLOG',
    displayIcon: 'clean',
    componentName: 'Blog',
    paneType: 'main',
    componentModule: () => import('@porrtal-components/r-porrtal-io'),
  },
];
