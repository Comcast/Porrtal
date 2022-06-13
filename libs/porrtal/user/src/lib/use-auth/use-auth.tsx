import { createContext, useContext } from 'react';
import { AuthInterface } from '../auth-interface';

export const AuthContext = createContext<AuthInterface>(null)

export function useAuth(): AuthInterface {
  const auth = useContext(AuthContext);
  return auth;
}

export default useAuth;
