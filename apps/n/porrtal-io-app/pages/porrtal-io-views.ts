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
    displayText: 'welcome',
    displayIcon: 'clean',
    componentName: 'Welcome',
    paneType: 'main',
    launchAtStartup: true,
    componentModule: () => import('@porrtal-components/r-porrtal-io'),
  },
];
