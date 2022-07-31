export interface ViewComponentModules {
  [moduleName: string]: Promise<Record<string, unknown>>
}
