import { Auth0Authentication } from '@porrtal/r-user';
import { ShellState } from '@porrtal/r-shell';
import { testModules, testViews } from '../test-config/test-view-states';
import { ShellMaterial } from '@porrtal/r-shell-material';
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
        <ShellState modules={testModules} views={testViews}>
          <ShellMaterial />
        </ShellState>
      </Auth0Authentication>
    );
  }

  return <div>loading...</div>;
}

export default Index;
