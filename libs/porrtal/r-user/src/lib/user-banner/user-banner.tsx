/*
Copyright 2022 Comcast Cable Communications Management, LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import LoginButton from '../login-button/login-button';
import LogoutButton from '../logout-button/logout-button';
import useAuth from '../use-auth/use-auth';
import styles from './user-banner.module.scss';

/* eslint-disable-next-line */
export interface UserBannerProps {}

export function UserBanner(props: UserBannerProps) {
  const auth = useAuth();

  if (auth?.isInitialized) {
    return (
      <div className={styles['container']}>
        {auth?.isAuthenticated && <span>{auth?.user?.email}</span>}
        {!auth?.isAuthenticated && <LoginButton />}
        {auth?.isAuthenticated && <LogoutButton />}
      </div>
    );
  } else {
    return <div className={styles['container']}>loading...</div>;
  }
}

export default UserBanner;
