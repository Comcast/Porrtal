# Porrtal Recipe - Nx OpenAPI Angular Strapi

This recipe will show you the steps to create a Porrtal Angular Strapi application using Nx (https://nx.dev).

## Create the Strapi Project

Please see [Strapi Project Setup](StrapiSetup.md)

## Create the Nx Project

To create an Nx project, you use a command like this:

```
npx create-nx-workspace@latest [project-name] --preset=angular --appName=[app-name] --style=[style] --routing
```

* `[project-name]`: Replace this with your desired project name.
* `--preset=angular`: Specifies that the project will use Angular.
* `--appName=[app-name]`: Replace `[app-name]` with the name of your Angular application.
* `--style=[style]`: Choose the stylesheet format (css, scss, styl, less).

For this recipe, we will use the following command:

```
npx create-nx-workspace@latest my-angular-workspace --preset=angular --appName=my-angular-app --style=scss
```

Questions are answered as follows:

* `Integrated or Standalone`: integrated
* `bundler`: esbuild
* `Enable ssr`: no
* `Test Runner for E2E Tests`: cypress
* `Enable Distributed Caching`: no

NOTE: This command takes awhile to run.

## Navigate to the Nx project

```
cd my-angular-workspace
```

## Run the App

```
nx serve my-angular-app
```

# Get Basic Porrtal Running

## Add Angular Material to my-angular-app

```
npm install @angular/material --save --legacy-peer-deps

nx generate @angular/material:ng-add --project=my-angular-app
```

Questions answered as follows:

* `prebuilt theme`: Deep Purple / Amber
* `setup global angular material typography styles`: true
* `include angular animations`: enabled

## Add Porrtal Packages

```
npm install @porrtal/a-api @porrtal/a-shell @porrtal/a-shell-material ag-grid-community ag-grid-angular @rx-angular/state angular-split ngx-popperjs uuid dot-object --save --legacy-peer-deps

npm install @porrtal/a-user @porrtal/a-user-msal --save --legacy-peer-deps

npm install @types/uuid --save-dev --legacy-peer-deps
```

## Create Library

```
nx g @nx/angular:library --name=my-lib --unitTestRunner=jest --directory=libs/my-scope/my-lib --importPath=@my-scope/my-lib --projectNameAndRootFormat=as-provided --style=scss
```

## Create Components

These components will become porrtal "views" (by referencing them in the porrtal "views" array in `app.component.ts` below).

```
nx g @nx/angular:component --name=nav --directory=libs/my-scope/my-lib/src/lib/nav --export=true --nameAndDirectoryFormat=as-provided
nx g @nx/angular:component --name=main1 --directory=libs/my-scope/my-lib/src/lib/main1 --export=true --nameAndDirectoryFormat=as-provided
nx g @nx/angular:component --name=main2 --directory=libs/my-scope/my-lib/src/lib/main2 --export=true --nameAndDirectoryFormat=as-provided
```

## Update app.component.html

Modify the file: `apps/my-angular-app/src/app/app.component.html`:

```html
<porrtal-shell-layout [bannerData]="porrtalBanner"> </porrtal-shell-layout>
```

## Update app.component.ts

Modify the file: `apps/my-angular-app/src/app/app.component.ts`:

```ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannerData, ShellStateService } from '@porrtal/a-shell';
import { View } from '@porrtal/a-api';
import { ShellLayoutComponent } from '@porrtal/a-shell-material';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-balham.css';

@Component({
  standalone: true,
  imports: [RouterModule, ShellLayoutComponent],
  selector: 'my-angular-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-angular-app';

  porrtalViews: View[] = [
    {
      key: 'Nav',
      launchAtStartup: true,
      displayText: 'Nav',
      paneType: 'nav',
      displayIcon: 'updated',
      componentName: 'NavComponent',
      componentModule: () => import('@my-scope/my-lib'),
    },
    {
      key: 'Main1',
      launchAtStartup: true,
      displayText: 'Main1',
      paneType: 'main',
      displayIcon: 'updated',
      componentName: 'Main1Component',
      componentModule: () => import('@my-scope/my-lib'),
    },
    {
      key: 'Main2',
      launchAtStartup: true,
      displayText: 'Main2',
      paneType: 'main',
      displayIcon: 'updated',
      componentName: 'Main2Component',
      componentModule: () => import('@my-scope/my-lib'),
    },
    {
      viewId: 'shell-state-dashboard',
      paneType: 'bottom',
      launchAtStartup: false,
      componentName: 'ShellStateDashboardComponent',
      componentModule: () => import('@porrtal/a-shell-material'),
      key: 'shell-state-dashboard',
      displayText: 'Shell State Dashboard',
      displayIcon: 'key',
    },
  ];

  porrtalBanner: BannerData = {
    // uncomment and edit this code if you would like a banner image
    // bannerImageUrl: './assets/my-banner.png',
    // bannerImageHeight: 63,
    // bannerImageWidth: 500,
    displayText: 'My App',
    displayIcon: 'cyclone',
    childData: [],
  };

  constructor(public shellStateService: ShellStateService) {
    this.porrtalViews.forEach((view) =>
      shellStateService.dispatch({
        type: 'registerView',
        view,
      })
    );

    shellStateService.dispatch({
      type: 'launchStartupViews',
    });
  }
}
```

## Add ag-grid Styles to project.json

Update file: `apps/my-angular-app/project.json` (add to the `styles` array)

```json
{
  "name": "my-angular-app",
  "$schema": "../../node_modules/nx/schemas/project-schema.json",
  "projectType": "application",
  "prefix": "my-angular-workspace",
  "sourceRoot": "apps/my-angular-app/src",
  "tags": [],
  "targets": {
    "build": {
      "executor": "@angular-devkit/build-angular:application",
      "outputs": [
        "{options.outputPath}"
      ],
      "options": {
        "outputPath": "dist/apps/my-angular-app",
        "index": "apps/my-angular-app/src/index.html",
        "browser": "apps/my-angular-app/src/main.ts",
        "polyfills": [
          "zone.js"
        ],
        "tsConfig": "apps/my-angular-app/tsconfig.app.json",
        "inlineStyleLanguage": "scss",
        "assets": [
          "apps/my-angular-app/src/favicon.ico",
          "apps/my-angular-app/src/assets"
        ],
        "styles": [
          "@angular/material/prebuilt-themes/deeppurple-amber.css",
          "apps/my-angular-app/src/styles.scss",
          "ag-grid-community/styles/ag-grid.css",
          "ag-grid-community/styles/ag-theme-balham.css"
        ],
        "scripts": []
      },
      // ...
    }
  }
}
```

# Add Strapi Authentication to Porrtal App

The rest of the recipe assumes that you followed the instructions here [Strapi Project Setup](StrapiSetup.md) and that you have Strapi running on the default port `http://localhost:1337`.

## Install @porrtal/a-user-strapi Library

From the `my-angular-workspace` folder, install the porrtal React library for Strapi:

```
npm install @porrtal/r-user-strapi --save --legacy-peer-deps
```

## Update app.config.ts

Update the file: `apps/my-angular-app/src/app/app.config.ts`

This will enable the porrtal "strapi" authentication pointing at the strapi instance created above.

```ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { appRoutes } from './app.routes';

import {
  PorrtalStrapiConfiguration,
  provideStrapiOAuthClient,
} from '@porrtal/a-user-strapi';

const porrtalStrapiConfiguration: PorrtalStrapiConfiguration = {
  allowRegistration: true,
  strapiUri: 'http://localhost:1337',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideAnimations(),
    provideHttpClient(),
    provideStrapiOAuthClient(porrtalStrapiConfiguration),
  ],
};
```

You should now see the Strapi login / logout button and user info in the banner.

# Integrate Strapi REST API into Porrtal App

We will create a library and fill it with generated "proxy" code that wraps the Strapi REST API.

Use of the strongly-typed proxy code simplifies accessing the Strapi REST API and can help avoid programming errors.

## Add Library For Strapi REST API Proxy

Add Library @my-scope/my-strapi-proxy

```
nx g @nx/angular:library --name=my-strapi-proxy --unitTestRunner=jest --bundler=rollup --directory=libs/my-scope/my-strapi-proxy --importPath=@my-scope/my-strapi-proxy --projectNameAndRootFormat=as-provided
```

Questions answerd as follows:

* `stylesheet format`: scss

## Copy Strapi OpenAPI JSON File

Assuming you used the default "my-project" location in the [Strapi Project Setup](StrapiSetup.md), copy the Strapi OpenAPI JSON file to the library.

```
cp ../my-project/src/extensions/documentation/documentation/1.0.0/full_documentation.json ./libs/my-scope/my-strapi-proxy/src/
```

## Install OpenAPI Code Generator

Please follow the instructions to install `openapi-generator` on your development workstation.
https://openapi-generator.tech/docs/installation/

If you are on a Mac, it can be installed using [homebrew](https://brew.sh/) like this:

```
brew install openapi-generator
```

## Run OpenAPI Code Generator

```
export TS_POST_PROCESS_FILE="/usr/local/bin/prettier --write"
	
openapi-generator generate -i ./libs/my-scope/my-strapi-proxy/src/full_documentation.json -o ./libs/my-scope/my-strapi-proxy/src/lib -g typescript-axios --skip-validate-spec
```

You can choose to edit the JSON file to remove the errors.  This will allow you to remove the `--skip-validate-spec` flag from the above command.

## Update the index.ts for the @my-scope/my-strapi-proxy Library

Update `libs/my-scope/my-strapi-proxy/src/index.ts`:

```ts
export * from "./lib/api";
export * from "./lib/configuration";
```

## Instal @porrtal/r-user-axios

The `@porrtal/r-user-axios` package provides support for REST API authentication by adding the access token to outgoing REST API http calls.

```
npm install @porrtal/r-user-axios --save --legacy-peer-deps
```

## Update Wrapper.tsx with AxiosProxy Configuration

```tsx
'use client';

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';
import { Configuration, PorrtalRoleApi } from '@my-scope/my-strapi-proxy';

import { View } from '@porrtal/r-api';
import { BannerData, ShellState } from '@porrtal/r-shell';
import { ShellBlueprint } from '@porrtal/r-shell-blueprint';
import { AxiosProxy } from '@porrtal/r-user-axios';
import { StrapiAuthentication } from '@porrtal/r-user-strapi';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-balham.css';
import { useEffect, useState } from 'react';

export default function Wrapper() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const porrtalViews: View[] = [
    {
      key: 'Nav',
      launchAtStartup: true,
      displayText: 'Nav',
      paneType: 'nav',
      displayIcon: 'updated',
      componentName: 'Nav',
      componentModule: () => import('@my-scope/my-lib'),
    },
    {
      key: 'Main1',
      launchAtStartup: true,
      displayText: 'Main1',
      paneType: 'main',
      displayIcon: 'updated',
      componentName: 'Main1',
      componentModule: () => import('@my-scope/my-lib'),
    },
    {
      key: 'Main2',
      launchAtStartup: true,
      displayText: 'Main2',
      paneType: 'main',
      displayIcon: 'updated',
      componentName: 'Main2',
      componentModule: () => import('@my-scope/my-lib'),
    },
  ];
  const porrtalBanner: BannerData = {
    // uncomment and edit this code if you would like a banner image
    // bannerImageUrl: './assets/my-banner.png',
    // bannerImageHeight: 63,
    // bannerImageWidth: 500,
    displayText: 'My App',
    displayIcon: 'build',
    childData: [],
  };

  return (
    <div>
      {isClient ? (
        <ShellState views={porrtalViews}>
          <StrapiAuthentication
            strapiUri="http://localhost:1337"
            allowRegistration={true}
          >
            <AxiosProxy
              config={[
                {
                  baseUrl: 'http://localhost:1337/api',
                  // scopes are not needed for Strapi
                  scopes: ['read:stuff'],
                  apiClasses: [PorrtalRoleApi],
                  configuration: Configuration,
                },
              ]}
            >
              <ShellBlueprint bannerData={porrtalBanner} />
            </AxiosProxy>
          </StrapiAuthentication>
        </ShellState>
      ) : (
        <div />
      )}
    </div>
  );
}
```

## Update Main2.tsx to Use Strapi REST API

```tsx
import styles from './main2.module.scss';
import { PorrtalRoleApi } from '@my-scope/my-strapi-proxy';
import { useAxiosApi } from '@porrtal/r-user-axios';
import { useEffect, useState } from 'react';

/* eslint-disable-next-line */
export interface Main2Props {}

export function Main2(props: Main2Props) {
  const porrtalRoleApi = useAxiosApi(PorrtalRoleApi);
  const [roles, setRoles] = useState<string[] | undefined>(undefined);

  useEffect(() => {
    porrtalRoleApi
      .getPorrtalRoles()
      .then((data) => {
        setRoles(
          data.data.data?.map((role) => role?.attributes?.name ?? '') ?? []
        );
      })
      .catch((err) => {
        console.error(err);
        setRoles([JSON.stringify(err)]);
      });
  }, [porrtalRoleApi]);

  return (
    <div className={styles['container']}>
      <h1>Welcome to Main2!</h1>
      <p>
        {roles
          ? roles.length > 0
            ? `Your roles are ${roles.join(', ')}`
            : 'You have no roles'
          : 'loading roles...'}
      </p>
    </div>
  );
}

export default Main2;
```

# Advanced use of @porrtal/r-user and @porrtal/r-user-axios

## useAxiosProxy and useAuthNGetToken React Hooks

The `useAxiosProxy` React hook from the `@porrtal/r-user-axios` package provides two methods: `registerLibraryEntries` and `generateReport`.

* `registerLibraryEntries` can be used to register additional REST API endpoints programmatically.
* `generateReport` can be used to generate a report of the registered endpoints.

The `useAuthNGetToken` React hook from the `@porrtal/r-user` package provides the `getToken` method that can be used to directly obtain an access token.

The following code illustrates the use of these hooks and their methods:

```tsx
import { useAuthNGetToken } from '@porrtal/r-user';
import styles from './v1.module.scss';
import { useEffect, useState } from 'react';
import { Configuration, PorrtalRoleApi } from '@porrtal-proxy/r-my-project2';
import { useAxiosApi, useAxiosProxy } from '@porrtal/r-user-axios';

/* eslint-disable-next-line */
export interface V1Props {}

export function V1(props: V1Props) {
  const getToken = useAuthNGetToken();
  const porrtalRoleApi = useAxiosApi(PorrtalRoleApi);
  const axiosProxy = useAxiosProxy();

  // add an effect to initialize the axios proxy (not used, initialized in app)
  // useEffect(() => {
  //   axiosProxy.registerLibraryEntries([
  //     {
  //       baseUrl: 'http://localhost:1337',
  //       scopes: ['read:stuff'],
  //       configuration: Configuration,
  //       apiClasses: [PorrtalRoleApi],
  //     },
  //   ]);
  // }, []);

  // add a state variable to hold the token
  const [token, setToken] = useState<string | undefined>(undefined);
  const [roles, setRoles] = useState<string[] | undefined>(undefined);

  // add an effect to get the token into a state variable
  useEffect(() => {
    getToken(['read:stuff'])
      .then((token) => {
        setToken(token);
      })
      .catch((err) => {
        console.error(err);
        setToken(JSON.stringify(err));
      });
  }, []);

  // add an effect to get the roles into a state variable
  useEffect(() => {
    porrtalRoleApi
      .getPorrtalRoles()
      .then((data) => {
        setRoles(data.data.data.map((role) => role.attributes.name));
      })
      .catch((err) => {
        console.error(err);
        setRoles([JSON.stringify(err)]);
      });
  }, []);

  return (
    <div className={styles['container']}>
      <h1>Welcome to V1!</h1>
      <hr />
      <p>{token ? `Your token is ${token}` : 'You are not logged in'}</p>
      <p>
        {roles
          ? roles.length > 0
            ? `Your roles are ${roles.join(', ')}`
            : 'You have no roles'
          : 'loading roles...'}
      </p>
      <hr />
      <p>
        {axiosProxy
          .generateReport()
          .split('\n')
          .map((line, index) => {
            const match = line.match(/^(\s*)/);
            const indent = match ? match[0].length : 0;
            return (
              <span style={{ marginLeft: `${indent*8}px`}} key={index}>
                {line}
                <br />
              </span>
            );
          })}
      </p>
    </div>
  );
}

export default V1;
```
