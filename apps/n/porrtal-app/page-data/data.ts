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
import { BannerData } from "@porrtal/r-shell";

export const bannerData: BannerData = {
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
