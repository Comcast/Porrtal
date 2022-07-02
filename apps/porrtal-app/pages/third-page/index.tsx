import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';

import { ShellState } from '@porrtal/shell';
import { KeycloakAuthentication } from '@porrtal/user';
import { testComponents, testViews } from '../test-view-states';
import { ShellBlueprint } from '@porrtal/shell-blueprint';
import { useEffect, useState } from 'react';

/* eslint-disable-next-line */
export interface ThirdPageProps {}

export function ThirdPage(props: ThirdPageProps) {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (!isSSR) {
    return (
      <KeycloakAuthentication
        uri="http://localhost:8080"
        realm="porrtal"
        clientId="porrtal-app"
        redirectUri="http://localhost:4200/second-page"
      >
        <ShellState components={testComponents} views={testViews}>
          <ShellBlueprint />
        </ShellState>
      </KeycloakAuthentication>
    );
  }

  return <div>loading...</div>;
}

export default ThirdPage;
