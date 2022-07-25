import {
  ShellComponents,
  ShellComponentsContext,
  ShellLayoutSplitter,
  useShellDispatch,
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
  const shellDispatch = useShellDispatch();

  // register the blueprint logger-messages component
  shellDispatch({
    type: 'registerComponent',
    componentRegistration: {
      componentName: 'logger-messages',
      viewComponentFunction: () => import('./logger-messages/logger-messages')
    }
  });

  // register the blueprint logger-messages view
  shellDispatch({
    type: 'registerView',
    view:   {
      viewId: 'logger-messages',
      paneType: 'main',
      launchAtStartup: false,
      componentName: 'logger-messages',
      keyTemplate: 'logger-messages',
      displayTextTemplate: 'log',
      displayIconTemplate: 'notifications',
    },

  })


  return (
    <ShellComponentsContext.Provider value={shellComponents}>
      <ShellLayoutSplitter>{props.children}</ShellLayoutSplitter>
    </ShellComponentsContext.Provider>
  );
}
