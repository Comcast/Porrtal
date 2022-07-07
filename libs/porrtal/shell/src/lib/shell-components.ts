import { createContext, useContext } from 'react';
import { SearchComponent } from './search-props';
import { ViewStackComponent } from "./view-stack-props";

export interface ShellComponents {
  ViewStack: ViewStackComponent;
  Search: SearchComponent;
}

export const ShellComponentsContext = createContext<ShellComponents | undefined>(undefined);

export function useShellComponents(): ShellComponents | undefined {
  const shellComponents = useContext(ShellComponentsContext);
  return shellComponents;
}
