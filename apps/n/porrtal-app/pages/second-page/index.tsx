/*
Copyright 2024 Comcast Cable Communications Management, LLC

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
import { KeycloakAuthentication } from '@porrtal/r-user-keycloak';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { testModules, testViews } from '../../test-config/test-view-states';
import { ShellBlueprint } from '@porrtal/r-shell-blueprint';

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';

export function Index() {
  const [isSSR, setIsSSR] = useState(true);
  const [selectedButton, setSelectedButton] = useState('noBanner');

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (!isSSR) {
    const headerButtons = (
      <div style={{ padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <button
            className={selectedButton === 'noBanner' ? 'selected' : ''}
            onClick={() => setSelectedButton('noBanner')}
          >
            no banner
          </button>
          <button
            className={selectedButton === 'normalBanner' ? 'selected' : ''}
            onClick={() => setSelectedButton('normalBanner')}
          >
            normal banner
          </button>
          <button
            className={selectedButton === 'customBanner' ? 'selected' : ''}
            onClick={() => setSelectedButton('customBanner')}
          >
            custom banner
          </button>
        </div>
      </div>
    );

    switch (selectedButton) {
      case 'noBanner':
        return (
          <div
            style={{
              display: 'grid',
              position: 'absolute',
              inset: 0,
              gridTemplateRows: 'auto 1fr',
              margin: 0,
              padding: 0,
              backgroundColor: 'darkgray',
            }}
          >
            {' '}
            {headerButtons}
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 0 }}>
                <KeycloakAuthentication
                  uri="http://localhost:8080"
                  realm="porrtal"
                  clientId="porrtal-app"
                  redirectUri="http://localhost:4200/second-page"
                >
                  {' '}
                  <ShellState modules={testModules} views={testViews}>
                    <ShellBlueprint
                      banner={() => <></>}
                      bannerMenuInline={() => <></>}
                      loggerBanner={() => <></>}
                      search={() => <></>}
                      bannerMenuBar={() => <></>}
                      userBanner={() => <></>}
                    />
                  </ShellState>
                </KeycloakAuthentication>
              </div>
            </div>
          </div>
        );

      case 'normalBanner':
        return (
          <div
            style={{
              display: 'grid',
              position: 'absolute',
              inset: 0,
              gridTemplateRows: 'auto 1fr',
              margin: 0,
              padding: 0,
              backgroundColor: 'darkgray',
            }}
          >
            {' '}
            {headerButtons}
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 0 }}>
                <KeycloakAuthentication
                  uri="http://localhost:8080"
                  realm="porrtal"
                  clientId="porrtal-app"
                  redirectUri="http://localhost:4200/second-page"
                >
                  {' '}
                  <ShellState modules={testModules} views={testViews}>
                    <ShellBlueprint
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
              </div>
            </div>
          </div>
        );

      case 'customBanner':
        return (
          <div
            style={{
              display: 'grid',
              position: 'absolute',
              inset: 0,
              gridTemplateRows: 'auto 1fr',
              margin: 0,
              padding: 0,
              backgroundColor: 'darkgray',
            }}
          >
            {' '}
            {headerButtons}
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 0 }}>
                <KeycloakAuthentication
                  uri="http://localhost:8080"
                  realm="porrtal"
                  clientId="porrtal-app"
                  redirectUri="http://localhost:4200/second-page"
                >
                  {' '}
                  <ShellState modules={testModules} views={testViews}>
                    <ShellBlueprint
                      banner={() => (
                        <div style={{ paddingLeft: '20px' }}>
                          MU HA HA HA HA !!! :) :)
                        </div>
                      )}
                      bannerMenuInline={() => <></>}
                      loggerBanner={() => <></>}
                      search={() => <></>}
                      bannerMenuBar={() => <></>}
                      userBanner={() => <></>}
                    />
                  </ShellState>
                </KeycloakAuthentication>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div
            style={{
              display: 'grid',
              position: 'absolute',
              inset: 0,
              gridTemplateRows: 'auto 1fr',
              margin: 0,
              padding: 0,
              backgroundColor: 'darkgray',
            }}
          >
            {' '}
            {headerButtons}
            <div style={{ padding: '20px', backgroundColor: 'white' }}>
              Banner type '{selectedButton}' not supported
            </div>
          </div>
        );
    }
  }

  return <div>loading...</div>;
}

export default Index;
