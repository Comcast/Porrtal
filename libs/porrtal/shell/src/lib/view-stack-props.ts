import { Pane } from '@porrtal/api';

export interface ViewStackProps {
  pane: Pane;
}

export type ViewStackComponent = (props: ViewStackProps) => JSX.Element;
