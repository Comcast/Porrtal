import { ViewState } from "./view-state";

export type PaneType =
  'nav' | 'main' | 'right' | 'bottom' | 'search';

export type Panes = {
  [key in PaneType]: Pane;
};

export type PaneArrangement = 'tabs-top' | 'tabs-left' | 'cards';

export type Pane = {
  arrange: PaneArrangement;
  currentKey: string;
  viewStates: ViewState[];
}
