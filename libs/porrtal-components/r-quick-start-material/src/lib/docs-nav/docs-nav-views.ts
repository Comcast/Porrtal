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
import { View } from '@porrtal/r-api';

export const docsNavViews: View[] = [
  {
    viewId: 'Welcome',
    displayText: 'Welcome !!',
    displayIcon: 'auto_awesome',
    componentName: 'MarkdownViewer',
    paneType: 'main',
    launchAtStartup: true,
    componentModule: () => import('@porrtal-components/r-learning'),
    state: {
      contentUrl:
        '/docs/porrtal-components-r-quick-start-material/welcome/welcome.md',
    },
  },
  {
    viewId: 'SetupYourWorkstation',
    displayText: 'Setup Your Workstation',
    displayIcon: 'auto_awesome',
    componentName: 'MarkdownViewer',
    paneType: 'main',
    componentModule: () => import('@porrtal-components/r-learning'),
    state: {
      contentUrl:
        '/docs/porrtal-components-r-quick-start-material/setup-your-workstation/setup-your-workstation.md',
    },
  },
  {
    viewId: 'CreatetheApp',
    displayText: 'Create the App',
    displayIcon: 'auto_awesome',
    componentName: 'MarkdownViewer',
    paneType: 'main',
    componentModule: () => import('@porrtal-components/r-learning'),
    state: {
      contentUrl:
        '/docs/porrtal-components-r-quick-start-material/create-the-app/create-the-app.md',
    },
  },
  {
    viewId: 'Create the Nav Component',
    displayText: 'Create the Nav Componet',
    displayIcon: 'auto_awesome',
    componentName: 'MarkdownViewer',
    paneType: 'main',
    componentModule: () => import('@porrtal-components/r-learning'),
    state: {
      contentUrl:
        '/docs/porrtal-components-r-quick-start-material/create-the-nav-component/create-the-nav-component.md',
    },
  },
  {
    viewId: 'Launch a Component',
    displayText: 'Launch a Component',
    displayIcon: 'auto_awesome',
    componentName: 'MarkdownViewer',
    paneType: 'main',
    componentModule: () => import('@porrtal-components/r-learning'),
    state: {
      contentUrl:
        '/docs/porrtal-components-r-quick-start-material/launch-a-component/launch-a-component.md',
    },
  },
  {
    viewId: 'Create an Entity Menu',
    displayText: 'Create an Entity Menu',
    displayIcon: 'auto_awesome',
    componentName: 'MarkdownViewer',
    paneType: 'main',
    componentModule: () => import('@porrtal-components/r-learning'),
    state: {
      contentUrl:
        '/docs/porrtal-components-r-quick-start-material/create-an-entity-menu/create-an-entity-menu.md',
    },
  },
  {
    viewId: 'Create a Search Component',
    displayText: 'Create a Search Component',
    displayIcon: 'auto_awesome',
    componentName: 'MarkdownViewer',
    paneType: 'main',
    componentModule: () => import('@porrtal-components/r-learning'),
    state: {
      contentUrl:
        '/docs/porrtal-components-r-quick-start-material/create-a-search-component/create-a-search-component.md',
    },
  },
  {
    viewId: 'Next Steps',
    displayText: 'Next Steps',
    displayIcon: 'auto_awesome',
    componentName: 'MarkdownViewer',
    paneType: 'main',
    componentModule: () => import('@porrtal-components/r-learning'),
    state: {
      contentUrl:
        '/docs/porrtal-components-r-quick-start-material/next-steps/next-steps.md',
    },
  },
];
