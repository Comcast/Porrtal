import { BannerData, UserBannerComponent } from '@porrtal/r-shell';
import { ReactNode } from 'react';
import { ShellComponentsMaterial } from './shell-components-material';

export interface ShellMaterialProps {
  children?: ReactNode;
  bannerData?: BannerData;
  userBanner?: UserBannerComponent;
}

export function ShellMaterial(props: ShellMaterialProps) {
  return (
    <ShellComponentsMaterial
      bannerData={props.bannerData}
      userBanner={props.userBanner}
    >
      {props.children}
    </ShellComponentsMaterial>
  );
}
