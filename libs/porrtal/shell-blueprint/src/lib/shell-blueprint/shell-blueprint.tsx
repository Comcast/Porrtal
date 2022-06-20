import ShellComponentsBlueprint from '../shell-components-blueprint/shell-components-blueprint';

export interface ShellBlueprintProps {
  children?: React.ReactChild | React.ReactChild[];
}

export function ShellBlueprint(props: ShellBlueprintProps) {
  return <ShellComponentsBlueprint>{props.children}</ShellComponentsBlueprint>;
}

export default ShellBlueprint;
