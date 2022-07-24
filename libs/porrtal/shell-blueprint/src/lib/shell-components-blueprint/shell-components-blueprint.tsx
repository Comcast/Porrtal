import { ShellComponents, ShellComponentsContext, ShellLayoutSplitter } from '@porrtal/shell';
import ViewStack from '../view-stack/view-stack';
import Search from '../search/search';
import EntityMenu from '../entity-menu/entity-menu';

/* eslint-disable-next-line */
export interface ShellComponentsBlueprintProps {
  children?: React.ReactChild | React.ReactChild[];
}

export function ShellComponentsBlueprint(props: ShellComponentsBlueprintProps) {
  const shellComponents: ShellComponents = {
    ViewStack,
    Search,
    EntityMenu
  };
  return (
    <ShellComponentsContext.Provider value={shellComponents}>
      <ShellLayoutSplitter>{props.children}</ShellLayoutSplitter>
    </ShellComponentsContext.Provider>
  );
}

export default ShellComponentsBlueprint;
