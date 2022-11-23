import { PaneType } from './pane';
import { ViewLaunch } from './view-launch';
import { StateObject } from './view-state';

export interface View {
  viewId?: string;
  launchAtStartup?: boolean;
  paneType?: PaneType;
  entityType?: string;
  componentName: string;
  componentModule: string | (() => Promise<Record<string, unknown>>);
  state?: StateObject;

  key?: string;
  displayText: string;
  displayIcon?: string;

  userInfo?: ViewLaunch[];
  devInfo?: ViewLaunch[];
}
