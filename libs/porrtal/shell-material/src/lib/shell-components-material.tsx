import {
  ShellComponents,
  ShellComponentsContext,
  ShellLayoutSplitter,
} from '@porrtal/shell';
import ViewStack from './view-stack/view-stack';
import { ReactChild } from 'react';
import Search from './search/search';

export interface ShellComponentsMaterialProps {
  children?: ReactChild | ReactChild[];
}

export function ShellComponentsMaterial(props: ShellComponentsMaterialProps) {
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
