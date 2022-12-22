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
import { View } from '@porrtal/a-api';
import { BannerData } from '@porrtal/a-shell';

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
};

export const bannerData: BannerData = {
  displayText: '@porrtal',
  displayIcon: 'cyclone',
  displayImage: '/assets/angular.svg',
  bannerImageUrl: '/assets/banner-image-test.png',
  bannerImageWidth: 200,
  bannerImageHeight: 44,
  childData: [
    {
      displayIcon: 'cyclone',
      displayText: '@porrtal',
      targetUrl: '/',
    },
    {
      displayImage: '/assets/react.svg',
      displayText: 'quick-start',
      targetUrl: '/react/quick-start',
    },
    {
      displayImage: '/assets/react.svg',
      displayText: 'samples',
      targetUrl: '/react/samples',
    },
    {
      displayImage: '/assets/react.svg',
      displayText: 'inside-porrtal',
      targetUrl: '/react/inside-porrtal',
    },
    {
      displayImage: '/assets/angular.svg',
      displayText: 'quick-start',
      targetUrl: 'quick-start',
    },
    {
      displayImage: '/assets/angular.svg',
      displayText: 'samples',
      targetUrl: 'samples',
    },
    {
      displayImage: '/assets/angular.svg',
      displayText: 'inside-porrtal',
      targetUrl: 'inside-porrtal',
    },
  ],
};
