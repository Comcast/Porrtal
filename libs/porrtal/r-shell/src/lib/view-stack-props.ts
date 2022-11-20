import { Pane } from '@porrtal/r-api';
import { ReactEventHandler } from 'react';

export interface ViewStackProps {
  pane: Pane;
  showUserInfo: boolean;
  showDevInfo: boolean;
  onClose?: ReactEventHandler;
}

export type ViewStackComponent = (props: ViewStackProps) => JSX.Element;
