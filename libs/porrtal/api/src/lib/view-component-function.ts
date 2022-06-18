import { ViewComponentProps } from "./view-component-props";

export type ViewComponentFunction =
  () => Promise<{ default: React.ComponentType<ViewComponentProps>; }>
