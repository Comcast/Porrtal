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
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';

import { ShellState } from '@porrtal/r-shell';
import { UserBanner } from '@porrtal/r-user';
import { testModules, testViews } from '../../test-config/test-view-states';
import { ShellBlueprint } from '@porrtal/r-shell-blueprint';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { KeycloakAuthentication } from '@porrtal/r-user-keycloak';

/* eslint-disable-next-line */
export interface ThirdPageProps {}

export function ThirdPage(props: ThirdPageProps) {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (!isSSR) {
    return (
      <>
        <Head>
          <title>@porrtal - third page</title>
        </Head>

        <KeycloakAuthentication
          uri="http://localhost:8080"
          realm="porrtal"
          clientId="porrtal-app"
          redirectUri="http://localhost:4200/second-page"
        >
          <ShellState modules={testModules} views={testViews}>
            <ShellBlueprint
              bannerData={{
                displayText: 'Third Page',
                displayIcon: 'cyclone',
                childData: [
                  {
                    displayText: 'First Page',
                    displayImage: '/assets/react.svg',
                    targetUrl: '/',
                  },
                  {
                    displayText: 'Second Page',
                    displayImage: '/assets/angular.svg',
                    displayIcon: 'cyclone',
                    targetUrl: '/second-page',
                  },
                  {
                    displayText: 'Quick Start Demo',
                    displayImage: '/assets/react.svg',
                    displayIcon: 'cyclone',
                    targetUrl: '/quick-start-demo',
                  },
                ],
              }}
              userBanner={UserBanner}
            />
          </ShellState>
        </KeycloakAuthentication>
      </>
    );
  }

  return <div>loading....</div>;
}

export default ThirdPage;
