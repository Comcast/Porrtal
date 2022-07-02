import { ShellState } from '@porrtal/shell';
import { ShellMaterial } from '@porrtal/shell-material';
import { KeycloakAuthentication } from '@porrtal/user';
import { useEffect, useState } from 'react';
import { testComponents, testViews } from '../test-view-states';

export function Index() {
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
          <ShellMaterial />
        </ShellState>
      </KeycloakAuthentication>
    );
  }

  return <div>loading...</div>;
}

export default Index;
