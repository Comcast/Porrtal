/*
Copyright 2022 Comcast Cable Communications Management, LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import { PaneType } from './pane';
import { View } from './view';
import { ViewComponentFunction } from './view-component-function';
import { ViewLaunch } from './view-launch';

export interface StateObject {
  [key: string]: string | number | bigint | boolean | StateObject;
}

export interface ViewState {
  key: string;
  displayText: string;
  displayIcon: string;
  state?: StateObject;

  userInfo?: ViewLaunch[];
  devInfo?: ViewLaunch[];

  paneType: PaneType;
  componentImport: ViewComponentFunction;
  view: View;
}
