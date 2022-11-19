import { StateObject } from './view-state';

export interface ViewLaunch {
  viewId: string;
  state?: StateObject;
}
