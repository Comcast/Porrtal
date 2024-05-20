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
import { createContext, useContext } from 'react';
import { BannerMenuBarComponent } from './banner-menu-bar-props';
import { BannerMenuInlineComponent } from './banner-menu-inline-props';
import { BannerComponent, BannerData } from './banner-props';
import { EntityMenuComponent } from './entity-menu/entity-menu';
import { LoggerBannerComponent } from './logger-banner-props';
import { SearchComponent } from './search-props';
import { UserBannerComponent } from './user-banner-props';
import { ViewStackComponent } from './view-stack-props';
import { MaximizeHostComponent } from './maximize-host-props';

export interface ShellComponents {
  ViewStack: ViewStackComponent;
  Search: SearchComponent;
  EntityMenu: EntityMenuComponent;
  Banner: BannerComponent;
  BannerMenuInline: BannerMenuInlineComponent;
  BannerMenuBar: BannerMenuBarComponent;
  UserBanner?: UserBannerComponent;
  bannerData?: BannerData;
  LoggerBanner: LoggerBannerComponent;
  MaximizeHost: MaximizeHostComponent;
}

export const ShellComponentsContext = createContext<
  ShellComponents | undefined
>(undefined);

export function useShellComponents(): ShellComponents | undefined {
  const shellComponents = useContext(ShellComponentsContext);
  return shellComponents;
}
