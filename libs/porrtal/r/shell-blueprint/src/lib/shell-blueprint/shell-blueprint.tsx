import { BannerData } from '@porrtal/r-shell';
import { ReactNode } from 'react';
import ShellComponentsBlueprint from '../shell-components-blueprint/shell-components-blueprint';

export interface ShellBlueprintProps {
  children?: ReactNode;
  bannerData?: BannerData;
}

export function ShellBlueprint(props: ShellBlueprintProps) {
  return <ShellComponentsBlueprint bannerData={props.bannerData}>{props.children}</ShellComponentsBlueprint>;
}

export default ShellBlueprint;
