import { ViewState } from '@porrtal/api';

/* eslint-disable-next-line */
export interface ViewStackProps {
  arrange: 'tabs-top' | 'tabs-left' | 'cards';
  items: ViewState[];
}

export type ViewStackComponent = (props: ViewStackProps) => JSX.Element;
