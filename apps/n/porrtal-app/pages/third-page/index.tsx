import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';

import { ShellState } from '@porrtal/r-shell';
import { KeycloakAuthentication } from '@porrtal/r-user';
import { testModules, testViews } from '../../test-config/test-view-states';
import { ShellBlueprint } from '@porrtal/r-shell-blueprint';
import { useEffect, useState } from 'react';
import Head from 'next/head';

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
            <ShellBlueprint />
          </ShellState>
        </KeycloakAuthentication>
      </>
    );
  }

  return <div>loading....</div>;
}

export default ThirdPage;
