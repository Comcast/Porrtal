# generate page (quick-start-demo) in app
nx generate @nx/next:page quick-start-demo --project=porrtal-app --style=scss --withTests

# generate @porrtal-components/quick-start-demo library
nx generate @nx/react:library quick-start-demo --directory=porrtal-components --style=scss --buildable --no-component --importPath=@porrtal-components/quick-start-demo --publishable --standaloneConfig

# generate data
mkdir -p ./libs/porrtal-components/quick-start-demo/data
touch ./libs/porrtal-components/quick-start-demo/data/account-data.ts
touch ./libs/porrtal-components/quick-start-demo/data/appointment-data.ts
touch ./libs/porrtal-components/quick-start-demo/data/hierarchy-data.ts

# generate components
nx generate @nx/react:component account-nav --project=porrtal-components-quick-start-demo --style=scss --directory=account --export
nx generate @nx/react:component account-search --project=porrtal-components-quick-start-demo --style=scss --directory=account --export
nx generate @nx/react:component account-detail --project=porrtal-components-quick-start-demo --style=scss --directory=account --export
nx generate @nx/react:component account-billing-history --project=porrtal-components-quick-start-demo --style=scss --directory=account --export
nx generate @nx/react:component account-create --project=porrtal-components-quick-start-demo --style=scss --directory=account --export

nx generate @nx/react:component appointment-nav --project=porrtal-components-quick-start-demo --style=scss --directory=appointment --export
nx generate @nx/react:component appointment-search --project=porrtal-components-quick-start-demo --style=scss --directory=appointment --export
nx generate @nx/react:component appointment-detail --project=porrtal-components-quick-start-demo --style=scss --directory=appointment --export
nx generate @nx/react:component appointment-location-map --project=porrtal-components-quick-start-demo --style=scss --directory=appointment --export
nx generate @nx/react:component appointment-create --project=porrtal-components-quick-start-demo --style=scss --directory=appointment --export

nx generate @nx/react:component viz-nav --project=porrtal-components-quick-start-demo --style=scss --export

nx generate @nx/react:component zoomable-circle-pack --project=porrtal-components-quick-start-demo --style=scss --directory=hierarchy --export
nx generate @nx/react:component zoomable-sunburst --project=porrtal-components-quick-start-demo --style=scss --directory=hierarchy --export
nx generate @nx/react:component zoomable-treemap --project=porrtal-components-quick-start-demo --style=scss --directory=hierarchy --export
nx generate @nx/react:component zoomable-sunburst --project=porrtal-components-quick-start-demo --style=scss --directory=hierarchy --export
nx generate @nx/react:component zoomable-icicle --project=porrtal-components-quick-start-demo --style=scss --directory=hierarchy --export
nx generate @nx/react:component collapsible-tree --project=porrtal-components-quick-start-demo --style=scss --directory=hierarchy --export
nx generate @nx/react:component hierarchical-bar-chart --project=porrtal-components-quick-start-demo --style=scss --directory=hierarchy --export
