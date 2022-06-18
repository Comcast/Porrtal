import { ViewComponentFunction } from "./view-component-function";
import { ViewPane } from "./view-pane";

export interface ViewState {
  key: string;
  viewPane: ViewPane;
  componentName: string;
  componentImport?: ViewComponentFunction;
  displayText: string;
  displayIcon: string;
}
