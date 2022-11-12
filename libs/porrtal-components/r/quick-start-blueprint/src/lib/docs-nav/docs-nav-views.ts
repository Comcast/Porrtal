import { View } from '@porrtal/r-api';

export const docsNavViews: View[] = [
  {
    viewId: 'Welcome',
    displayText: 'Welcome !!',
    displayIcon: 'clean',
    componentName: 'MarkdownViewer',
    paneType: 'main',
    launchAtStartup: true,
    componentModule: () => import('@porrtal-components/r-learning'),
    state: {
      contentUrl: '/docs/porrtal-components-r-quick-start-blueprint/welcome/welcome.md'
    }
  },
  {
    viewId: 'Setup Your Workstation',
    displayText: 'Setup Your Workstation',
    displayIcon: 'clean',
    componentName: 'MarkdownViewer',
    paneType: 'main',
    componentModule: () => import('@porrtal-components/r-learning'),
    state: {
      contentUrl: '/docs/porrtal-components-r-quick-start-blueprint/setup-your-workstation/setup-your-workstation.md'
    },
  },
  {
    viewId: 'Create the App',
    displayText: 'Create the App',
    displayIcon: 'clean',
    componentName: 'MarkdownViewer',
    paneType: 'main',
    componentModule: () => import('@porrtal-components/r-learning'),
    state: {
      contentUrl: '/docs/porrtal-components-r-quick-start-blueprint/create-the-app/create-the-app.md'
    },
  },
  {
    viewId: 'Create the Nav Component',
    displayText: 'Create the Nav Componet',
    displayIcon: 'clean',
    componentName: 'MarkdownViewer',
    paneType: 'main',
    componentModule: () => import('@porrtal-components/r-learning'),
    state: {
      contentUrl: '/docs/porrtal-components-r-quick-start-blueprint/create-the-nav-component/create-the-nav-component.md'
    },
  },
  {
    viewId: 'Launch a Component',
    displayText: 'Launch a Component',
    displayIcon: 'clean',
    componentName: 'MarkdownViewer',
    paneType: 'main',
    componentModule: () => import('@porrtal-components/r-learning'),
    state: {
      contentUrl: '/docs/porrtal-components-r-quick-start-blueprint/launch-a-component/launch-a-component.md'
    },
  },
  {
    viewId: 'Create an Entity Menu',
    displayText: 'Create an Entity Menu',
    displayIcon: 'clean',
    componentName: 'MarkdownViewer',
    paneType: 'main',
    componentModule: () => import('@porrtal-components/r-learning'),
    state: {
      contentUrl: '/docs/porrtal-components-r-quick-start-blueprint/create-an-entity-menu/create-an-entity-menu.md'
    },
  },
  {
    viewId: 'Create a Search Component',
    displayText: 'Create a Search Component',
    displayIcon: 'clean',
    componentName: 'MarkdownViewer',
    paneType: 'main',
    componentModule: () => import('@porrtal-components/r-learning'),
    state: {
      contentUrl: '/docs/porrtal-components-r-quick-start-blueprint/create-a-search-component/create-a-search-component.md'
    },
  },
];
