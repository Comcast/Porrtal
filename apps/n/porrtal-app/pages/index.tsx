import { Auth0Authentication } from '@porrtal/r-user';
import { ShellState } from '@porrtal/r-shell';
import { testModules, testViews } from '../test-config/test-view-states';
import { ShellMaterial } from '@porrtal/r-shell-material';
import { useEffect, useState } from 'react';
import Head from 'next/head';

export function Index() {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (!isSSR) {
    return (
      <>
        <Head>
          <title>@porrtal - first page</title>
        </Head>

        <Auth0Authentication
          domain="dev-b6h3bfnp.us.auth0.com"
          clientId="uP4eHSspiDjg6E7GKU5LjdFPn0WwEKTq"
          redirectUri="http://localhost:4200"
        >
          <ShellState modules={testModules} views={testViews}>
            <ShellMaterial
              bannerData={{
                displayText: 'Quick Start Demo',
                displayIcon: 'cyclone',
                childData: [
                  {
                    displayText: 'First Page',
                    displayImage: '/react.svg',
                    targetUrl: '/',
                  },
                  {
                    displayText: 'Second Page',
                    displayImage: '/angular.svg',
                    displayIcon: 'cyclone',
                    targetUrl: '/second-page',
                  },
                  {
                    displayText: 'Quick Start Demo',
                    displayImage: '/react.svg',
                    displayIcon: 'cyclone',
                    targetUrl: '/quick-start-demo',
                  },
                ],
              }}
            />
          </ShellState>
        </Auth0Authentication>
      </>
    );
  }

  return <div>loading...</div>;
}

export default Index;
