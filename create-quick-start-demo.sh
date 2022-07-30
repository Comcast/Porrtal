# generate page (quick-start-demo) in app
nx generate @nrwl/next:page quick-start-demo --project=porrtal-app --style=scss --withTests

# generate @porrtal-components/quick-start-demo library
nx generate @nrwl/react:library quick-start-demo --directory=porrtal-components --style=scss --buildable --no-component --importPath=@porrtal-components/quick-start-demo --publishable --standaloneConfig

# generate data
mkdir -p ./libs/porrtal-components/quick-start-demo/data
touch ./libs/porrtal-components/quick-start-demo/data/account-data.ts
touch ./libs/porrtal-components/quick-start-demo/data/appointment-data.ts
touch ./libs/porrtal-components/quick-start-demo/data/hierarchy-data.ts

# generate components
nx generate @nrwl/react:component account-nav --project=porrtal-components-quick-start-demo --style=scss --directory=account --export
nx generate @nrwl/react:component account-search --project=porrtal-components-quick-start-demo --style=scss --directory=account --export
nx generate @nrwl/react:component account-detail --project=porrtal-components-quick-start-demo --style=scss --directory=account --export
nx generate @nrwl/react:component account-billing-history --project=porrtal-components-quick-start-demo --style=scss --directory=account --export
nx generate @nrwl/react:component account-create --project=porrtal-components-quick-start-demo --style=scss --directory=account --export

nx generate @nrwl/react:component appointment-nav --project=porrtal-components-quick-start-demo --style=scss --directory=appointment --export
nx generate @nrwl/react:component appointment-search --project=porrtal-components-quick-start-demo --style=scss --directory=appointment --export
nx generate @nrwl/react:component appointment-detail --project=porrtal-components-quick-start-demo --style=scss --directory=appointment --export
nx generate @nrwl/react:component appointment-location-map --project=porrtal-components-quick-start-demo --style=scss --directory=appointment --export
nx generate @nrwl/react:component appointment-create --project=porrtal-components-quick-start-demo --style=scss --directory=appointment --export

nx generate @nrwl/react:component hurricane-map --project=porrtal-components-quick-start-demo --style=scss --directory=esri/hurricane --export
nx generate @nrwl/react:component earthquake-map --project=porrtal-components-quick-start-demo --style=scss --directory=esri/earthquake --export
nx generate @nrwl/react:component digital-elevation-map --project=porrtal-components-quick-start-demo --style=scss --directory=esri/digital-elevation --export
# https://developers.arcgis.com/javascript/latest/sample-code/layers-scenelayerview-query-stats/
nx generate @nrwl/react:component building-scene-with-query --project=porrtal-components-quick-start-demo --style=scss --directory=esri/building-scene --export

nx generate @nrwl/react:component zoomable-sunburst --project=porrtal-components-quick-start-demo --style=scss --directory=hierarchy --export
nx generate @nrwl/react:component zoomable-treemap --project=porrtal-components-quick-start-demo --style=scss --directory=hierarchy --export
nx generate @nrwl/react:component zoomable-sunburst --project=porrtal-components-quick-start-demo --style=scss --directory=hierarchy --export
nx generate @nrwl/react:component zoomable-icicle --project=porrtal-components-quick-start-demo --style=scss --directory=hierarchy --export
nx generate @nrwl/react:component collapsible-tree --project=porrtal-components-quick-start-demo --style=scss --directory=hierarchy --export
nx generate @nrwl/react:component hierarchical-bar-chart --project=porrtal-components-quick-start-demo --style=scss --directory=hierarchy --export
