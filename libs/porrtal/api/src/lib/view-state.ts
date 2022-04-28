import { PorrtalViewComponentFunction } from "./porrtal-view-component-function";

export interface ViewState {
  key: string;
  componentName: string;
  componentImport: PorrtalViewComponentFunction;
  displayText: string;
  displayIcon: string;
}
