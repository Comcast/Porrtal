import {
  BannerData,
  ShellComponents,
  ShellComponentsContext,
  ShellLayoutSplitter,
  UserBannerComponent,
  useShellDispatch,
} from '@porrtal/r-shell';
import ViewStack from '../view-stack/view-stack';
import Search from '../search/search';
import EntityMenu from '../entity-menu/entity-menu';
import LoggerBanner from '../logger-banner/logger-banner';
import { ReactNode, useEffect } from 'react';
import Banner from '../banner/banner';

export interface ShellComponentsBlueprintProps {
  children: ReactNode | undefined;
  bannerData?: BannerData;
  userBanner?: UserBannerComponent;
}

export function ShellComponentsBlueprint(props: ShellComponentsBlueprintProps) {
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

  // register the blueprint logger-messages view
  useEffect(
    () =>
      shellDispatch({
        type: 'registerView',
        view: {
          viewId: 'logger-messages',
          paneType: 'bottom',
          launchAtStartup: false,
          componentName: 'LoggerMessages',
          componentModule: () => import('../logger-messages/logger-messages'),
          key: 'logger-messages',
          displayText: 'log',
          displayIcon: 'notifications',
        },
      }),
    [shellDispatch]
  );

  return (
    <ShellComponentsContext.Provider value={shellComponents}>
      <ShellLayoutSplitter>{props.children}</ShellLayoutSplitter>
    </ShellComponentsContext.Provider>
  );
}

export default ShellComponentsBlueprint;
