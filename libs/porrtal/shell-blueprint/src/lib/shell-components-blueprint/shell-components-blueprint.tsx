import { ShellComponents, ShellComponentsContext, ShellLayoutSplitter } from '@porrtal/shell';
import ViewStack from '../view-stack/view-stack';
import Search from '../search/search';

/* eslint-disable-next-line */
export interface ShellComponentsBlueprintProps {
  children?: React.ReactChild | React.ReactChild[];
}

export function ShellComponentsBlueprint(props: ShellComponentsBlueprintProps) {
  const shellComponents: ShellComponents = {
    ViewStack,
    Search
  };
  return (
    <ShellComponentsContext.Provider value={shellComponents}>
      <ShellLayoutSplitter>{props.children}</ShellLayoutSplitter>
    </ShellComponentsContext.Provider>
  );
}

export default ShellComponentsBlueprint;
