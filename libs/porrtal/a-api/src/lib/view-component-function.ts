import { Type } from '@angular/core';
import { ViewComponentProps } from './view-component-props';

export type ViewComponentFunction = () => Promise<Type<ViewComponentProps>> | undefined;
