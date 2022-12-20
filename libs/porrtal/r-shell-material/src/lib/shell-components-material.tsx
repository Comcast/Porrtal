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
import {
  BannerData,
  ShellComponents,
  ShellComponentsContext,
  ShellLayoutSplitter,
  UserBannerComponent,
  useShellDispatch,
} from '@porrtal/r-shell';
import ViewStack from './view-stack/view-stack';
import { ReactNode, useEffect } from 'react';
import Search from './search/search';
import EntityMenu from './entity-menu/entity-menu';
import LoggerBanner from './logger-banner/logger-banner';
import Banner from './banner/banner';

export interface ShellComponentsMaterialProps {
  children: ReactNode | undefined;
  bannerData?: BannerData;
  userBanner?: UserBannerComponent;
}

export function ShellComponentsMaterial(props: ShellComponentsMaterialProps) {
  const shellComponents: ShellComponents = {
    ViewStack,
    Search,
    EntityMenu,
    Banner,
    bannerData: props.bannerData,
    UserBanner: props?.userBanner,
    LoggerBanner,
  };
  const shellDispatch = useShellDispatch();

  // register the material logger-messages view
  useEffect(
    () => {
      shellDispatch({
        type: 'registerView',
        view: {
          viewId: 'logger-messages',
          paneType: 'bottom',
          launchAtStartup: false,
          componentName: 'LoggerMessages',
          componentModule: () => import('./logger-messages/logger-messages'),
          key: 'logger-messages',
          displayText: 'log',
          displayIcon: 'notifications',
        },
      })
            
      shellDispatch({
        type: 'setNavTabWidth',
        width: '64px',
      });
    },
    [shellDispatch]
  );

  return (
    <ShellComponentsContext.Provider value={shellComponents}>
      <ShellLayoutSplitter>{props.children}</ShellLayoutSplitter>
    </ShellComponentsContext.Provider>
  );
}
