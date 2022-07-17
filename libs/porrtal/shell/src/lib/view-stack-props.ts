import { Pane } from '@porrtal/api';
import { ReactEventHandler } from 'react';

export interface ViewStackProps {
  pane: Pane;
  onClose?: ReactEventHandler
}

export type ViewStackComponent = (props: ViewStackProps) => JSX.Element;
