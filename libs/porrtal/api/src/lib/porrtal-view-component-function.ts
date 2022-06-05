import { PorrtalViewComponentProps } from "./porrtal-view-component-props";

export type PorrtalViewComponentFunction =
  () => Promise<{ default: React.ComponentType<PorrtalViewComponentProps>; }>
