import { useAuth0 } from '@auth0/auth0-react';
import styles from './login-button.module.scss';

/* eslint-disable-next-line */
export interface LoginButtonProps {}

export function LoginButton(props: LoginButtonProps) {
  const { loginWithRedirect } = useAuth0();

  return (
    <button onClick={() => loginWithRedirect()}>Log In</button>
  );
}

export default LoginButton;
