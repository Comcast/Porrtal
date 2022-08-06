# generate component in app a-porrtal-app (add route by editing app.module.ts)
nx generate @nrwl/angular:component quick-start-demo --project=a-porrtal-app --changeDetection=OnPush --standalone

# generate @porrtal-components/quick-start-demo library
nx generate @nrwl/angular:library quick-start-demo --directory=porrtal-components/a --buildable --importPath=@porrtal-components/a-quick-start-demo --publishable --skipModule

# copy react ./libs/porrtal-components/r/quick-start-demo/data by copy / paste in vs code

# generate components
nx generate @nrwl/angular:component account-nav --project=porrtal-components-a-quick-start-demo --changeDetection=OnPush --skipImport --standalone --directory=account --export
nx generate @nrwl/angular:component account-search --project=porrtal-components-a-quick-start-demo --changeDetection=OnPush --skipImport --standalone --directory=account --export
nx generate @nrwl/angular:component account-detail --project=porrtal-components-a-quick-start-demo --changeDetection=OnPush --skipImport --standalone --directory=account --export
nx generate @nrwl/angular:component account-billing-history --project=porrtal-components-a-quick-start-demo --changeDetection=OnPush --skipImport --standalone --directory=account --export
nx generate @nrwl/angular:component account-create --project=porrtal-components-a-quick-start-demo --changeDetection=OnPush --skipImport --standalone --directory=account --export

nx generate @nrwl/angular:component appointment-nav --project=porrtal-components-a-quick-start-demo --changeDetection=OnPush --skipImport --standalone --directory=appointment --export
nx generate @nrwl/angular:component appointment-search --project=porrtal-components-a-quick-start-demo --changeDetection=OnPush --skipImport --standalone --directory=appointment --export
nx generate @nrwl/angular:component appointment-detail --project=porrtal-components-a-quick-start-demo --changeDetection=OnPush --skipImport --standalone --directory=appointment --export
nx generate @nrwl/angular:component appointment-location-map --project=porrtal-components-a-quick-start-demo --changeDetection=OnPush --skipImport --standalone --directory=appointment --export
nx generate @nrwl/angular:component appointment-create --project=porrtal-components-a-quick-start-demo --changeDetection=OnPush --skipImport --standalone --directory=appointment --export

nx generate @nrwl/angular:component viz-nav --project=porrtal-components-a-quick-start-demo --changeDetection=OnPush --skipImport --standalone --export

nx generate @nrwl/angular:component hurricane-map --project=porrtal-components-a-quick-start-demo --changeDetection=OnPush --skipImport --standalone --directory=esri/hurricane --export
nx generate @nrwl/angular:component earthquake-map --project=porrtal-components-a-quick-start-demo --changeDetection=OnPush --skipImport --standalone --directory=esri/earthquake --export
nx generate @nrwl/angular:component digital-elevation-map --project=porrtal-components-a-quick-start-demo --changeDetection=OnPush --skipImport --standalone --directory=esri/digital-elevation --export
# https://developers.arcgis.com/javascript/latest/sample-code/layers-scenelayerview-query-stats/
nx generate @nrwl/angular:component building-scene-with-query --project=porrtal-components-a-quick-start-demo --changeDetection=OnPush --skipImport --standalone --directory=esri/building-scene --export

nx generate @nrwl/angular:component zoomable-circle-pack --project=porrtal-components-a-quick-start-demo --changeDetection=OnPush --skipImport --standalone --directory=hierarchy --export
nx generate @nrwl/angular:component zoomable-sunburst --project=porrtal-components-a-quick-start-demo --changeDetection=OnPush --skipImport --standalone --directory=hierarchy --export
nx generate @nrwl/angular:component zoomable-treemap --project=porrtal-components-a-quick-start-demo --changeDetection=OnPush --skipImport --standalone --directory=hierarchy --export
nx generate @nrwl/angular:component zoomable-sunburst --project=porrtal-components-a-quick-start-demo --changeDetection=OnPush --skipImport --standalone --directory=hierarchy --export
nx generate @nrwl/angular:component zoomable-icicle --project=porrtal-components-a-quick-start-demo --changeDetection=OnPush --skipImport --standalone --directory=hierarchy --export
nx generate @nrwl/angular:component collapsible-tree --project=porrtal-components-a-quick-start-demo --changeDetection=OnPush --skipImport --standalone --directory=hierarchy --export
nx generate @nrwl/angular:component hierarchical-bar-chart --project=porrtal-components-a-quick-start-demo --changeDetection=OnPush --skipImport --standalone --directory=hierarchy --export
