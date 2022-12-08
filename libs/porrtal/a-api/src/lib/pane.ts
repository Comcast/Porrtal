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
import { ViewState } from './view-state';

// export type PaneType =
//   'nav' | 'main' | 'right' | 'bottom' | 'search';

export const paneTypes = ['nav', 'main', 'right', 'bottom', 'search'] as const;
export type PaneType = typeof paneTypes[number];

export type Panes = {
  [key in PaneType]: Pane;
};

export const paneArrangements = ['tabs-top', 'tabs-left', 'cards'] as const;
export type PaneArrangement = typeof paneArrangements[number];

export type Pane = {
  arrange: PaneArrangement;
  currentKey: string;
  viewStates: ViewState[];
  paneType: PaneType;
};
