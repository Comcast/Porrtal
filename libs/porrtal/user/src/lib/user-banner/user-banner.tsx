import LoginButton from '../login-button/login-button';
import LogoutButton from '../logout-button/logout-button';
import useAuth from '../use-auth/use-auth';
import styles from './user-banner.module.scss';

/* eslint-disable-next-line */
export interface UserBannerProps {}

export function UserBanner(props: UserBannerProps) {
  const auth = useAuth();

  return (
    <div className={styles['container']}>
      {auth?.isAuthenticated && <span>{auth?.user?.email}</span>}
      {!auth?.isAuthenticated && <LoginButton />}
      {auth?.isAuthenticated && <LogoutButton />}
    </div>
  );
}

export default UserBanner;
