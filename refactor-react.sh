#porrtal apps
nx generate @nrwl/workspace:move r/porrtal-app --projectName=porrtal-react-app
nx generate @nrwl/workspace:move r/porrtal-app-e2e --projectName=porrtal-react-app-e2e
nx generate @nrwl/workspace:move n/porrtal-app --projectName=porrtal-app
nx generate @nrwl/workspace:move n/porrtal-app-e2e --projectName=porrtal-app-e2e

#porrtal libs
nx generate @nrwl/workspace:move porrtal/r/api --projectName=porrtal-api --importPath=@porrtal/r-api
nx generate @nrwl/workspace:move porrtal/r/shell --projectName=porrtal-shell --importPath=@porrtal/r-shell
nx generate @nrwl/workspace:move porrtal/r/shell-blueprint --projectName=porrtal-shell-blueprint --importPath=@porrtal/r-shell-blueprint
nx generate @nrwl/workspace:move porrtal/r/shell-material --projectName=porrtal-shell-material --importPath=@porrtal/r-shell-material
nx generate @nrwl/workspace:move porrtal/r/split --projectName=porrtal-split --importPath=@porrtal/r-split
nx generate @nrwl/workspace:move porrtal/r/user --projectName=porrtal-user --importPath=@porrtal/r-user

#porrtal-components
nx generate @nrwl/workspace:move porrtal-components/r/quick-start-demo --projectName=porrtal-components-quick-start-demo --importPath=@porrtal-components/r-quick-start-demo
