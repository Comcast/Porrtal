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
            <ShellMaterial />
          </ShellState>
        </KeycloakAuthentication>
      </>
    );
  }

  return <div>loading...</div>;
}

export default Index;
