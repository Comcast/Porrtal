import { ViewState } from "./view-state";

// export type PaneType =
//   'nav' | 'main' | 'right' | 'bottom' | 'search';

export const paneTypes = ['nav', 'main', 'right', 'bottom', 'search'] as const;
export type PaneType = typeof paneTypes[number];

export type Panes = {
  [key in PaneType]: Pane;
};

export const paneArrangements = ['tabs-top', 'tabs-left', 'cards']
export type PaneArrangement = typeof paneArrangements[number];

export type Pane = {
  arrange: PaneArrangement;
  currentKey: string;
  viewStates: ViewState[];
  paneType: PaneType;
}
