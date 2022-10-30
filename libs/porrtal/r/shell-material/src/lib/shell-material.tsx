import { BannerData } from '@porrtal/r-shell';
import { ReactNode } from 'react';
import { ShellComponentsMaterial } from './shell-components-material';

export interface ShellMaterialProps {
  children?: ReactNode;
  bannerData?: BannerData;
}

export function ShellMaterial(props: ShellMaterialProps) {
  return <ShellComponentsMaterial bannerData={props.bannerData}>{props.children}</ShellComponentsMaterial>;
}
