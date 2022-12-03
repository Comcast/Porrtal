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

  reactUiLibrary = localStorage.getItem('reactUiLibrary') ?? '';
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

  angularUiLibrary = localStorage.getItem('angularUiLibrary') ?? '';
  if (angularUiLibs.has(angularUiLibrary)) {
    return angularUiLibrary;
  }

  localStorage.setItem('angularUiLibrary', 'material');
  return 'material';
}

export const getBannerData = (): BannerData => {
  return {
    displayText: 'porrtal.io',
    displayIcon: 'hurricane',
    childData: [
      {
        key: 'porrtal.io',
        displayIcon: 'hurricane',
        displayText: 'porrtal.io',
        targetUrl: '/',
      },
      {
        key: 'react-quick-start',
        displayImage: '/assets/react.svg',
        displayText: 'quick-start',
        targetUrl: `/react/quick-start`,
      },
      {
        key: 'react-samples',
        displayImage: '/assets/react.svg',
        displayText: 'samples',
        targetUrl: `/react/samples`,
      },
      {
        key: 'react-inside-porrtal',
        displayImage: '/assets/react.svg',
        displayText: 'inside-porrtal',
        targetUrl: `/react/inside-porrtal`,
      },
      {
        key: 'angular-quick-start',
        displayImage: '/assets/angular.svg',
        displayText: 'quick-start',
        targetUrl: '/angular/quick-start',
      },
      {
        key: 'angular-samples',
        displayImage: '/assets/angular.svg',
        displayText: 'samples',
        targetUrl: '/angular/samples',
      },
      {
        key: 'angular-inside-porrtal',
        displayImage: '/assets/angular.svg',
        displayText: 'inside-porrtal',
        targetUrl: '/angular/inside-porrtal',
      },
    ],
  };
};

