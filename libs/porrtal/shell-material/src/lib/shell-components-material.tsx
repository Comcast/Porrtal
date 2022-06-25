import {
  ShellComponents,
  ShellComponentsContext,
  ShellLayoutSplitter,
} from '@porrtal/shell';
import ViewStack from './view-stack/view-stack';

export interface ShellComponentsMaterialProps {
  children?: React.ReactChild | React.ReactChild[];
}

export function ShellComponentsMaterial(props: ShellComponentsMaterialProps) {
  const shellComponents: ShellComponents = {
    ViewStack,
  };
  return (
    <ShellComponentsContext.Provider value={shellComponents}>
      <ShellLayoutSplitter>{props.children}</ShellLayoutSplitter>
    </ShellComponentsContext.Provider>
  );
}
