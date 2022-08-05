import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { AuthContext } from '../use-auth/auth-context';
import { AuthInterface } from '../auth-interface';

interface Auth0AdapterProps {
  children?: React.ReactChild | React.ReactChild[];
}

function Auth0Adapter(props: Auth0AdapterProps) {
  const auth0 = useAuth0();
  const auth: AuthInterface = {
    user: auth0 ? (auth0?.user as { name: string; email: string }) : undefined,
    loginWithRedirect: auth0?.loginWithRedirect,
    logout: auth0?.logout,
    isAuthenticated: auth0?.isAuthenticated,
    isInitialized: auth0 ? !auth0?.isLoading : false,
  };

  return (
    <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
  );
}

export interface Auth0AuthenticationProps {
  domain: string;
  clientId: string;
  redirectUri: string;
  children?: React.ReactChild | React.ReactChild[];
}

export function Auth0Authentication(props: Auth0AuthenticationProps) {
  return (
    <Auth0Provider
      domain={props.domain}
      clientId={props.clientId}
      redirectUri={props.redirectUri}
    >
      <Auth0Adapter>{props.children}</Auth0Adapter>
    </Auth0Provider>
  );
}
