import {
  ShellComponents,
  ShellComponentsContext,
  ShellLayoutSplitter,
} from '@porrtal/shell';
import ViewStack from '../view-stack/view-stack';
import Search from '../search/search';
import EntityMenu from '../entity-menu/entity-menu';
import LoggerBanner from '../logger-banner/logger-banner';
import { ReactNode } from 'react';

export interface ShellComponentsBlueprintProps {
  children: ReactNode | undefined;
}

export function ShellComponentsBlueprint(props: ShellComponentsBlueprintProps) {
  const shellComponents: ShellComponents = {
    ViewStack,
    Search,
    EntityMenu,
    LoggerBanner,
  };
  return (
    <ShellComponentsContext.Provider value={shellComponents}>
      <ShellLayoutSplitter>{props.children}</ShellLayoutSplitter>
    </ShellComponentsContext.Provider>
  );
}

export default ShellComponentsBlueprint;
