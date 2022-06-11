import { createContext, useContext } from 'react';
import { AuthInterface } from '../auth-interface';

export const AuthContext = createContext<AuthInterface>(null)

export interface AuthAdapterProps {
  children?:
    | React.ReactChild
    | React.ReactChild[];
}

export interface AuthenticationProps {
  domain: string;
  clientId: string;
  redirectUri: string;
  children?:
    | React.ReactChild
    | React.ReactChild[];
}

export function useAuth(): AuthInterface {
  const auth = useContext(AuthContext);
  return auth;
}

export default useAuth;
