import { View } from '@porrtal/r-api';
import { BannerData } from '@porrtal/r-shell';

export const getReactUiLibrary = (): string => {
  const queryString = location.search;
  const reactUiLibs = new Set(['blueprint', 'mui']);
  const searchParams = new URLSearchParams(queryString);
  let reactUiLibrary = searchParams.get('reactUiLibrary') ?? '';
  if (reactUiLibs.has(reactUiLibrary)) {
    localStorage.setItem('reactUiLibrary', reactUiLibrary);
    return reactUiLibrary;
  }

  reactUiLibrary = localStorage.getItem('reactUiLibrary');
  if (reactUiLibs.has(reactUiLibrary)) {
    return reactUiLibrary;
  }

  localStorage.setItem('reactUiLibrary', 'blueprint');
  return 'blueprint';
};

export const getAngularUiLibrary = (): string => {
  const queryString = location.search;
  const angularUiLibs = new Set(['material']);
  const searchParams = new URLSearchParams(queryString);
  let angularUiLibrary = searchParams.get('angularUiLibrary') ?? '';
  if (angularUiLibs.has(angularUiLibrary)) {
    localStorage.setItem('angularUiLibrary', angularUiLibrary);
    return angularUiLibrary;
  }

  angularUiLibrary = localStorage.getItem('angularUiLibrary');
  if (angularUiLibs.has(angularUiLibrary)) {
    return angularUiLibrary;
  }

  localStorage.setItem('angularUiLibrary', 'material');
  return 'material';
}

export const getBannerData = (): BannerData => {
  return {
    displayText: '@porrtal',
    displayIcon: 'ninja',
    displayImage: '/assets/react.svg',
    childData: [
      {
        displayIcon: 'ninja',
        displayText: '@porrtal',
        targetUrl: '/',
      },
      {
        displayImage: '/assets/react.svg',
        displayText: 'quick-start',
        targetUrl: `/react/quick-start`,
      },
      {
        displayImage: '/assets/react.svg',
        displayText: 'samples',
        targetUrl: `/react/samples`,
      },
      {
        displayImage: '/assets/react.svg',
        displayText: 'inside-porrtal',
        targetUrl: `/react/inside-porrtal`,
      },
      {
        displayImage: '/assets/angular.svg',
        displayText: 'quick-start',
        targetUrl: '/angular/quick-start',
      },
      {
        displayImage: '/assets/angular.svg',
        displayText: 'samples',
        targetUrl: '/angular/samples',
      },
      {
        displayImage: '/assets/angular.svg',
        displayText: 'inside-porrtal',
        targetUrl: '/angular/inside-porrtal',
      },
    ],
  };
};

export const getViews = (): View[] => {
  const reactUiLibrary = getReactUiLibrary();
  const angularUiLibrary = getAngularUiLibrary();

  return [
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

}
