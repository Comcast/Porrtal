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
