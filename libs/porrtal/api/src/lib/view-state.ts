import { PaneType } from "./pane";
import { View } from "./view";
import { ViewComponentFunction } from "./view-component-function";

export interface StateObject {
  [key: string]: string | number | bigint | boolean | StateObject;
}

export interface ViewState {
  key: string;
  displayText: string;
  displayIcon: string;
  state?: StateObject;

  paneType: PaneType;
  componentImport: ViewComponentFunction;
  view: View;
}
