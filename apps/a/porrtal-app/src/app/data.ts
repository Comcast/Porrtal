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
import { BannerData } from "@porrtal/a-shell";

export const bannerData: BannerData = {
  displayText: 'Quick Start Demo',
  displayIcon: 'cyclone',
  childData: [
    {
      displayText: 'First Page',
      displayImage: '/assets/react.svg',
      targetUrl: '/',
    },
    {
      displayText: 'Second Page',
      displayImage: '/assets/angular.svg',
      displayIcon: 'cyclone',
      targetUrl: '/second-page',
    },
    {
      displayText: 'Quick Start Demo',
      displayImage: '/assets/react.svg',
      displayIcon: 'cyclone',
      targetUrl: '/quick-start-demo',
    },
  ],
};
