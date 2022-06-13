import { createContext } from 'react';
import { AuthInterface } from '../auth-interface';

export const AuthContext = createContext<AuthInterface>(null);
