import { Auth0ContextInterface, useAuth0 } from '@auth0/auth0-react';
import { useState, useCallback, createContext, useContext } from 'react';
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

export function useAuth(): AuthInterface {
  const auth = useContext(AuthContext);
  return auth;
}

export default useAuth;
