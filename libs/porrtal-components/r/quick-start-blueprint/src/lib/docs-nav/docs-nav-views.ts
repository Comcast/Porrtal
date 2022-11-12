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
];
