import { Auth0Provider, Auth0ContextInterface, useAuth0 } from '@auth0/auth0-react';
import { createContext, useContext } from 'react';
import { AuthInterface } from '../auth-interface';

export type AuthState =
  | { type: 'Auth0', auth: AuthInterface, auth0State: Auth0ContextInterface };

const AuthContext = createContext<AuthInterface>(null)

export interface AuthAdapterProps {
  children?:
    | React.ReactChild
    | React.ReactChild[];
}

export function Auth0Adapter(props: AuthAdapterProps) {
  const auth: AuthInterface = useAuth0();

  return (
    <AuthContext.Provider value={auth}>
      {props.children}
    </AuthContext.Provider>
  );
}

export interface AuthenticationProps {
  domain: string;
  clientId: string;
  redirectUri: string;
  children?:
    | React.ReactChild
    | React.ReactChild[];
}

export function Auth0Authentication(props: AuthenticationProps) {
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



export function useAuth(): AuthInterface {
  const auth = useContext(AuthContext);
  return auth;
}

export default useAuth;
