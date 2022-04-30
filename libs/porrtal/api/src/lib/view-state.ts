import { PorrtalViewComponentFunction } from "./porrtal-view-component-function";
import { PorrtalViewPane } from "./porrtal-view-pane";

export interface ViewState {
  key: string;
  porrtalViewPane: PorrtalViewPane;
  componentName: string;
  componentImport: PorrtalViewComponentFunction;
  displayText: string;
  displayIcon: string;
}
