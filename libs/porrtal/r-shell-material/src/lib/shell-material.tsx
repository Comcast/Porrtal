/*
Copyright 2023 Comcast Cable Communications Management, LLC

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
  BannerComponent,
  BannerData,
  BannerMenuBarComponent,
  BannerMenuInlineComponent,
  LoggerBannerComponent,
  SearchComponent,
  UserBannerComponent,
} from '@porrtal/r-shell';
import { ReactNode } from 'react';
import { ShellComponentsMaterial } from './shell-components-material';

export interface ShellMaterialProps {
  children?: ReactNode;
  bannerData?: BannerData;
  banner?: BannerComponent;
  bannerMenuInline?: BannerMenuInlineComponent;
  loggerBanner?: LoggerBannerComponent;
  userBanner?: UserBannerComponent;
  search?: SearchComponent;
  bannerMenuBar?: BannerMenuBarComponent;
}

export function ShellMaterial(props: ShellMaterialProps) {
  return (
    <ShellComponentsMaterial
      bannerData={props.bannerData}
      banner={props.banner}
      bannerMenuInline={props.bannerMenuInline}
      loggerBanner={props.loggerBanner}
      userBanner={props.userBanner}
      search={props.search}
      bannerMenuBar={props.bannerMenuBar}
    >
      {props.children}
    </ShellComponentsMaterial>
  );
}
