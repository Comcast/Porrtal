/*
Copyright 2022 Comcast Cable Communications Management, LLC

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
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { StrapiAuthentication } from '@porrtal/r-user-strapi';
import { ShellState } from '@porrtal/r-shell';
import { View } from '@porrtal/r-api';
import { ShellBlueprint } from '@porrtal/r-shell-blueprint';

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';

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
    displayIcon: 'cell-tower',
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
    permissions: 'primary:role 1',
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
    permissions: 'orphan-auth-z:role6',
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
    displayText: 'v4',
    displayIcon: 'cube',
  },
  {
    viewId: 'shell-state-dashboard',
    paneType: 'bottom',
    launchAtStartup: false,
    componentName: 'ShellStateDashboard',
    componentModule: () => import('@porrtal/r-shell-material'),
    key: 'shell-state-dashboard',
    displayText: 'Shell State Dashboard',
    displayIcon: 'key',
  },
];

export function Index() {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (!isSSR) {
    return (
      <>
        <Head>
          <title>@porrtal - porrtal-auth - n-strapi-app</title>
        </Head>

        <ShellState views={views}>
          <StrapiAuthentication
            strapiUri="http://localhost:1337"
            allowRegistration={true}
          >
            <ShellBlueprint
              bannerData={{
                displayText: 'porrtal-auth - nextjs - strapi - blueprint',
                displayIcon: 'hurricane',
                childData: [
                  {
                    displayText: 'strapi-material',
                    displayIcon: 'hurricane',
                    targetUrl: '/',
                  },
                ],
              }}
            />
          </StrapiAuthentication>
        </ShellState>
      </>
    );
  }

  return <div>loading...</div>;
}

export default Index;
