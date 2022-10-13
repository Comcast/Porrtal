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
            <ShellMaterial bannerData={{
              displayText: 'material tests',
              displayIcon: 'cyclone'
            }} />
          </ShellState>
        </Auth0Authentication>
      </>
    );
  }

  return <div>loading...</div>;
}

export default Index;
