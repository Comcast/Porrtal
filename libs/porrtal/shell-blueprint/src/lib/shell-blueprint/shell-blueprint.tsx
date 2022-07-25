import { ReactNode } from 'react';
import ShellComponentsBlueprint from '../shell-components-blueprint/shell-components-blueprint';

export interface ShellBlueprintProps {
  children: ReactNode | undefined;
}

export function ShellBlueprint(props: ShellBlueprintProps) {
  return <ShellComponentsBlueprint>{props.children}</ShellComponentsBlueprint>;
}

export default ShellBlueprint;
