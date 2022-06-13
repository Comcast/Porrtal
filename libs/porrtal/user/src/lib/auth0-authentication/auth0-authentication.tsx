import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { AuthContext, AuthAdapterProps } from '../use-auth/use-auth';
import { AuthInterface } from '../auth-interface';

export function Auth0Adapter(props: AuthAdapterProps) {
  const auth0 = useAuth0();
  const auth: AuthInterface = {
    user: auth0? auth0?.user as { name: string, email: string} : undefined,
    loginWithRedirect: auth0?.loginWithRedirect,
    logout: auth0?.logout,
    isAuthenticated: auth0?.isAuthenticated,
    isInitialized: auth0 ? !auth0?.isLoading : false
  }

  return (
    <AuthContext.Provider value={auth}>
      {props.children}
    </AuthContext.Provider>
  );
}

export interface Auth0AuthenticationProps {
  domain: string;
  clientId: string;
  redirectUri: string;
  children?:
    | React.ReactChild
    | React.ReactChild[];
}

export function Auth0Authentication(props: Auth0AuthenticationProps) {
  return (
    <Auth0Provider
      domain={props.domain}
      clientId={props.clientId}
      redirectUri={props.redirectUri}
    >
      <Auth0Adapter>
        {props.children}
      </Auth0Adapter>
    </Auth0Provider>
  )
}
