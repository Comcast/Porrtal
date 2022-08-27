import { Pane } from '@porrtal/r-api';
import { ReactEventHandler } from 'react';

export interface ViewStackProps {
  pane: Pane;
  onClose?: ReactEventHandler;
}

export type ViewStackComponent = (props: ViewStackProps) => JSX.Element;
