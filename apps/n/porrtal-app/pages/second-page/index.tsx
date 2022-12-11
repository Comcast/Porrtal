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
import { ShellState } from '@porrtal/r-shell';
import { ShellMaterial } from '@porrtal/r-shell-material';
import { KeycloakAuthentication } from '@porrtal/r-user';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { testModules, testViews } from '../../test-config/test-view-states';

export function Index() {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (!isSSR) {
    return (
      <>
        <Head>
          <title>@porrtal - second page</title>
        </Head>

        <KeycloakAuthentication
          uri="http://localhost:8080"
          realm="porrtal"
          clientId="porrtal-app"
          redirectUri="http://localhost:4200/second-page"
        >
          <ShellState modules={testModules} views={testViews}>
            <ShellMaterial
              bannerData={{
                displayText: 'Quick Start Demo',
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
            />
          </ShellState>
        </KeycloakAuthentication>
      </>
    );
  }

  return <div>loading...</div>;
}

export default Index;
