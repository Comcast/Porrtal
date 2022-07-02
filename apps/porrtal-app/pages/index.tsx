import { Auth0Authentication } from '@porrtal/user';
import { ShellState } from '@porrtal/shell';
import { testComponents, testViews } from './test-view-states';
import { ShellMaterial } from '@porrtal/shell-material';
import { useEffect, useState } from 'react';

export function Index() {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (!isSSR) {
    return (
      <Auth0Authentication
        domain="dev-b6h3bfnp.us.auth0.com"
        clientId="uP4eHSspiDjg6E7GKU5LjdFPn0WwEKTq"
        redirectUri="http://localhost:4200"
      >
        <ShellState components={testComponents} views={testViews}>
          <ShellMaterial />
        </ShellState>
      </Auth0Authentication>
    );
  }

  return <div>loading...</div>;
}

export default Index;
