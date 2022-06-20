import { ShellComponents, ShellComponentsContext, ShellLayout } from '@porrtal/shell';
import ViewStack from '../view-stack/view-stack';

/* eslint-disable-next-line */
export interface ShellComponentsBlueprintProps {
  children?: React.ReactChild | React.ReactChild[];
}

export function ShellComponentsBlueprint(props: ShellComponentsBlueprintProps) {
  const shellComponents: ShellComponents = {
    ViewStack,
  };
  return (
    <ShellComponentsContext.Provider value={shellComponents}>
      <ShellLayout>{props.children}</ShellLayout>
    </ShellComponentsContext.Provider>
  );
}

export default ShellComponentsBlueprint;
