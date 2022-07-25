import {
  ShellComponents,
  ShellComponentsContext,
  ShellLayoutSplitter,
} from '@porrtal/shell';
import ViewStack from './view-stack/view-stack';
import { ReactNode } from 'react';
import Search from './search/search';
import EntityMenu from './entity-menu/entity-menu';
import LoggerBanner from './logger-banner/logger-banner';

export interface ShellComponentsMaterialProps {
  children: ReactNode | undefined;
}

export function ShellComponentsMaterial(props: ShellComponentsMaterialProps) {
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
