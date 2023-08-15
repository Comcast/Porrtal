#!/bin/bash
#
export TERM=dumb
export NG_CLI_ANALYTICS=ci

pwd
ls -al ~

echo -------------------
node --version
npm --version
npx nx --version
echo -------------------

# List of packages to build and publish
packages=(
	"a-api"
	"a-shell"
	"a-shell-bootstrap"
	"a-shell-material"
	"a-user"
	"a-user-auth-z"
	"a-user-msal"
	"a-user-oidc"
	"a-user-strapi"
	"r-api"
	"r-shell"
	"r-shell-blueprint"
	"r-shell-material"
	"r-split"
	"r-user"
	"r-user-auth0"
	"r-user-keycloak"
	"r-user-mock"
	"r-msal"
	"r-strapi"
)

# Loop through each package in the list
for package in "${packages[@]}"; do
  echo "Building $package..."

  # Build the package
  npx nx build "porrtal-$package"

  echo "$package has been built."
done

echo "All packages have been built."

exit