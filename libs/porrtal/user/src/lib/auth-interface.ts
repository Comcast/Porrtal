export type AuthInterface = {
  user?: {
    name: string;
    email: string;
  },
  loginWithRedirect?: () => void;
  logout?: () => void;
  isAuthenticated: boolean;
  isInitialized: boolean;
} | null
