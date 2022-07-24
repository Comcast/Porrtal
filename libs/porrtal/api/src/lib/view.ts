import { PaneType } from './pane';
import { StateObject } from './view-state';

export interface View {
  viewId: string;
  launchAtStartup: boolean;
  paneType: PaneType;
  entityType?: string;
  componentName: string;
  state?: StateObject;

  keyTemplate: string;
  displayTextTemplate: string;
  displayIconTemplate: string;
}
