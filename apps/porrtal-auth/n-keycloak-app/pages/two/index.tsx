/*
Copyright 2023 Comcast Cable Communications Management, LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';

import { View } from '@porrtal/r-api';
import { useEffect, useState } from 'react';
import styles from './index.module.scss';
import Head from 'next/head';
import { ShellState } from '@porrtal/r-shell';
import { ShellBlueprint } from '@porrtal/r-shell-blueprint';
import { KeycloakAuthentication } from '@porrtal/r-user-keycloak';

/* eslint-disable-next-line */
export interface TwoProps {}

export function Two(props: TwoProps) {
  const views: View[] = [
    {
      viewId: 'main-view',
      paneType: 'main',
      launchAtStartup: true,
      componentName: 'MainView',
      componentModule: () => import('../../views/main-view/main-view'),
      key: 'main-view',
      displayText: 'main-view',
      displayIcon: 'home',
    },
    {
      viewId: 'nav-view',
      paneType: 'nav',
      launchAtStartup: true,
      componentName: 'NavView',
      componentModule: () => import('../../views/nav-view/nav-view'),
      key: 'nav-view',
      displayText: 'nav-view',
      displayIcon: 'feed',
    },
    {
      viewId: 'profile',
      paneType: 'right',
      launchAtStartup: true,
      componentName: 'Profile',
      componentModule: () => import('../../views/profile/profile'),
      key: 'profile',
      displayText: 'profile',
      displayIcon: 'user',
    },
    {
      viewId: 'v1',
      paneType: 'bottom',
      launchAtStartup: true,
      componentName: 'V1',
      componentModule: () => import('../../views/v1/v1'),
      key: 'v1',
      permissions: 'primary:authenticated',
      displayText: 'v1',
      displayIcon: 'cube',
    },
    {
      viewId: 'v2',
      paneType: 'bottom',
      launchAtStartup: true,
      componentName: 'V2',
      componentModule: () => import('../../views/v2/v2'),
      key: 'v2',
      permissions: 'primary:not-in-role',
      displayText: 'v2',
      displayIcon: 'cube',
    },
    {
      viewId: 'v3',
      paneType: 'bottom',
      launchAtStartup: true,
      componentName: 'V3',
      componentModule: () => import('../../views/v3/v3'),
      key: 'v3',
      entityType: 'account',
      displayText: 'v3',
      displayIcon: 'cube',
    },
    {
      viewId: 'v4',
      paneType: 'bottom',
      launchAtStartup: true,
      componentName: 'V4',
      componentModule: () => import('../../views/v4/v4'),
      key: 'v4',
      permissions: 'orphan-auth-z:no-role',
      displayText: 'v4',
      displayIcon: 'cube',
    },
    {
      viewId: 'shell-state-dashboard',
      paneType: 'bottom',
      launchAtStartup: false,
      componentName: 'ShellStateDashboard',
      componentModule: () => import('@porrtal/r-shell-blueprint'),
      key: 'shell-state-dashboard',
      displayText: 'Shell State Dashboard',
      displayIcon: 'key',
    },
  ];

  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (!isSSR) {
    return (
      <>
        <Head>
          <title>@porrtal - porrtal-auth - n-auth0-app (material)</title>
        </Head>

        <ShellState views={views}>
          <KeycloakAuthentication
            uri="http://localhost:8080"
            realm="porrtal"
            clientId="porrtal-app"
            redirectUri="http://localhost:4200"
          >
            <ShellBlueprint
              bannerData={{
                displayText: 'porrtal-auth - nextjs - keycloak (blueprint)',
                displayIcon: 'hurricane',
                childData: [
                  {
                    displayText: 'one',
                    targetUrl: '/',
                  },
                  {
                    displayText: 'two',
                    targetUrl: '/two',
                  },
                ],
              }}
            />
          </KeycloakAuthentication>
        </ShellState>
      </>
    );
  }

  return <div>loading...</div>;
}

export default Two;
