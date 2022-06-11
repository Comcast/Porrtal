import useAuth from "../use-auth/use-auth";

/* eslint-disable-next-line */
export interface LoginButtonProps {}

export function LoginButton(props: LoginButtonProps) {
  const auth = useAuth();

  return <button onClick={() => auth?.loginWithRedirect()}>Log In</button>;
}

export default LoginButton;
