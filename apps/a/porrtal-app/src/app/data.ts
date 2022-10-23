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
