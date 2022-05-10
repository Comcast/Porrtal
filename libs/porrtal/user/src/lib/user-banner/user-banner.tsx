import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../login-button/login-button';
import LogoutButton from '../logout-button/logout-button';
import styles from './user-banner.module.scss';

/* eslint-disable-next-line */
export interface UserBannerProps {}

export function UserBanner(props: UserBannerProps) {
  const { isAuthenticated, isLoading, user} = useAuth0();

  return (
    <div className={styles['container']}>
      {isAuthenticated && <span>{user?.email}</span>}
      {!isAuthenticated && <LoginButton />}
      {isAuthenticated && <LogoutButton />}
    </div>
  );
}

export default UserBanner;
