import { View } from '@porrtal/r-api';

export const quickStartViews: View[] = [
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
];
