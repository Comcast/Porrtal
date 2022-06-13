import { useContext } from 'react';
import { AuthInterface } from '../auth-interface';
import { AuthContext } from './auth-context';

export function useAuth(): AuthInterface {
  const auth = useContext(AuthContext);
  return auth;
}

export default useAuth;
