# generate component in app a-porrtal-app (add route by editing app.module.ts)
# nx generate @nrwl/angular:component quick-start-demo --project=a-porrtal-app --changeDetection=OnPush --standalone

# generate @porrtal-components/quick-start-demo library
nx generate @nrwl/angular:library quick-start-demo --directory=porrtal-components/a --buildable --importPath=@porrtal-components/a-quick-start-demo --publishable --skipModule

# copy react ./libs/porrtal-components/r/quick-start-demo/data by copy / paste in vs code

# generate components
nx generate @nrwl/angular:component account/account-nav --project=porrtal-components-a-quick-start-demo --changeDetection=OnPush --skipImport --standalone --export
nx generate @nrwl/angular:component account/account-search --project=porrtal-components-a-quick-start-demo --changeDetection=OnPush --skipImport --standalone --export
nx generate @nrwl/angular:component account/account-detail --project=porrtal-components-a-quick-start-demo --changeDetection=OnPush --skipImport --standalone --export
nx generate @nrwl/angular:component account/account-billing-history --project=porrtal-components-a-quick-start-demo --changeDetection=OnPush --skipImport --standalone --export
nx generate @nrwl/angular:component account/account-create --project=porrtal-components-a-quick-start-demo --changeDetection=OnPush --skipImport --standalone --export

nx generate @nrwl/angular:component appointment/appointment-nav --project=porrtal-components-a-quick-start-demo --changeDetection=OnPush --skipImport --standalone --export
nx generate @nrwl/angular:component appointment/appointment-search --project=porrtal-components-a-quick-start-demo --changeDetection=OnPush --skipImport --standalone --export
nx generate @nrwl/angular:component appointment/appointment-detail --project=porrtal-components-a-quick-start-demo --changeDetection=OnPush --skipImport --standalone --export
nx generate @nrwl/angular:component appointment/appointment-location-map --project=porrtal-components-a-quick-start-demo --changeDetection=OnPush --skipImport --standalone --export
nx generate @nrwl/angular:component appointment/appointment-create --project=porrtal-components-a-quick-start-demo --changeDetection=OnPush --skipImport --standalone --export

nx generate @nrwl/angular:component viz-nav --project=porrtal-components-a-quick-start-demo --changeDetection=OnPush --skipImport --standalone --export

nx generate @nrwl/angular:component hierarchy/zoomable-circle-pack --project=porrtal-components-a-quick-start-demo --changeDetection=OnPush --skipImport --standalone --export
nx generate @nrwl/angular:component hierarchy/zoomable-sunburst --project=porrtal-components-a-quick-start-demo --changeDetection=OnPush --skipImport --standalone --export
nx generate @nrwl/angular:component hierarchy/zoomable-treemap --project=porrtal-components-a-quick-start-demo --changeDetection=OnPush --skipImport --standalone --export
nx generate @nrwl/angular:component hierarchy/zoomable-sunburst --project=porrtal-components-a-quick-start-demo --changeDetection=OnPush --skipImport --standalone --export
nx generate @nrwl/angular:component hierarchy/zoomable-icicle --project=porrtal-components-a-quick-start-demo --changeDetection=OnPush --skipImport --standalone --export
nx generate @nrwl/angular:component hierarchy/collapsible-tree --project=porrtal-components-a-quick-start-demo --changeDetection=OnPush --skipImport --standalone --export
nx generate @nrwl/angular:component hierarchy/hierarchical-bar-chart --project=porrtal-components-a-quick-start-demo --changeDetection=OnPush --skipImport --standalone --export
