import { ShellComponentsMaterial } from "./shell-components-material";

export interface ShellMaterialProps {
  children?:
    | React.ReactChild
    | React.ReactChild[];
}

export function ShellMaterial(props: ShellMaterialProps) {
  return (
    <ShellComponentsMaterial>
      {props.children}
    </ShellComponentsMaterial>
  )
}
