import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { AuthContext, AuthAdapterProps } from '../use-auth/use-auth';
import { AuthInterface } from '../auth-interface';

export function Auth0Adapter(props: AuthAdapterProps) {
  const auth: AuthInterface = useAuth0();

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
