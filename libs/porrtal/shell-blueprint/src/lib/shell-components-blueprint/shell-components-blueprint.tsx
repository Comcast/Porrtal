import {
  ShellComponents,
  ShellComponentsContext,
  ShellLayoutSplitter,
  useShellDispatch,
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
  const shellDispatch = useShellDispatch();

  // register the blueprint logger-messages component
  shellDispatch({
    type: 'registerComponent',
    componentRegistration: {
      componentName: 'logger-messages',
      viewComponentFunction: () => import('../logger-messages/logger-messages')
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

export default ShellComponentsBlueprint;
