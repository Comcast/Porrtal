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
import { BannerData } from '@porrtal/r-shell';
import { UserBannerComponent } from '@porrtal/r-shell';
import { ReactNode } from 'react';
import ShellComponentsBlueprint from '../shell-components-blueprint/shell-components-blueprint';

export interface ShellBlueprintProps {
  children?: ReactNode;
  bannerData?: BannerData;
  userBanner?: UserBannerComponent;
}

export function ShellBlueprint(props: ShellBlueprintProps) {
  return (
    <ShellComponentsBlueprint
      bannerData={props.bannerData}
      userBanner={props.userBanner}
    >
      {props.children}
    </ShellComponentsBlueprint>
  );
}

export default ShellBlueprint;
