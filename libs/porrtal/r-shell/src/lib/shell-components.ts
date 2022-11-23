import { createContext, useContext } from 'react';
import { BannerComponent, BannerData } from './banner-props';
import { EntityMenuComponent } from './entity-menu/entity-menu';
import { LoggerBannerComponent } from './logger-banner-props';
import { SearchComponent } from './search-props';
import { UserBannerComponent } from './user-banner-props';
import { ViewStackComponent } from './view-stack-props';

export interface ShellComponents {
  ViewStack: ViewStackComponent;
  Search: SearchComponent;
  EntityMenu: EntityMenuComponent;
  Banner: BannerComponent;
  UserBanner?: UserBannerComponent;
  bannerData?: BannerData;
  LoggerBanner: LoggerBannerComponent;
}

export const ShellComponentsContext = createContext<
  ShellComponents | undefined
>(undefined);

export function useShellComponents(): ShellComponents | undefined {
  const shellComponents = useContext(ShellComponentsContext);
  return shellComponents;
}
