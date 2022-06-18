import { createContext, useContext } from 'react';
import { ViewStackComponent } from "./view-stack-props";

export interface ShellComponents {
  ViewStack: ViewStackComponent
}

export const ShellComponentsContext = createContext<ShellComponents | undefined>(undefined);

export function useShellComponents(): ShellComponents | undefined {
  const shellComponents = useContext(ShellComponentsContext);
  return shellComponents;
}
