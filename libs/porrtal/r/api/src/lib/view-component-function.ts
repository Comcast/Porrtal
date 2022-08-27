import { ComponentType } from 'react';
import { ViewComponentProps } from './view-component-props';

export type ViewComponentFunction = () => Promise<{
  default: ComponentType<ViewComponentProps>;
}>;
