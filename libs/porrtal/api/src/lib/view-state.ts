import { PaneType } from './pane';
import { ViewComponentFunction } from './view-component-function';

export interface ViewState {
  key: string;
  paneType: PaneType;
  componentName: string;
  componentImport?: ViewComponentFunction;
  displayText: string;
  displayIcon: string;
}
