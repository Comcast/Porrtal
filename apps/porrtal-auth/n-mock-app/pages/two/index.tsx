import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';

import { View } from '@porrtal/r-api';
import { useEffect, useState } from 'react';
import styles from './index.module.scss';
import Head from 'next/head';
import { ShellState } from '@porrtal/r-shell';
import { MockAuthentication, MockAuthZ } from '@porrtal/r-user-mock';
import { ShellBlueprint } from '@porrtal/r-shell-blueprint';

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
          <MockAuthentication
            authN={{
              loginAtStartup: true,
              loginDelay: 3000,
              errorMessage: 'silly error in auth n...',
            }}
          >
            <MockAuthZ
              name="primary"
              config={{
                fetchDelay: 3000,
                shouldFail: true,
                errorInfo: { message: 'silly configuration error...' },
              }}
            >
              <MockAuthZ
                name="second"
                config={{
                  fetchDelay: 5000,
                  shouldFail: false,
                  scopes: ['scope1', 'scope2', 'scope3'],
                  warningInfo: {
                    message: 'it is probably ok, but you should know...',
                  },
                  props: {
                    one: 1,
                    two: 2,
                    sub: {
                      sub_one: 1.1,
                    },
                  },
                  roles: ['role1', 'role2'],
                  pendingViews: [
                    {
                      type: 'startup',
                      viewId: 'v2',
                      state: { someProperty: 'some value...' },
                    },
                    {
                      type: 'deep-link',
                      viewId: 'v3',
                      state: { anotherProperty: 'another value...' },
                    },
                  ],
                }}
              >
                <ShellBlueprint
                  bannerData={{
                    displayText: 'porrtal-auth - nextjs - mock (blueprint)',
                    displayIcon: 'cyclone',
                  }}
                />
              </MockAuthZ>
            </MockAuthZ>
          </MockAuthentication>
        </ShellState>
      </>
    );
  }

  return <div>loading...</div>;
}

export default Two;
