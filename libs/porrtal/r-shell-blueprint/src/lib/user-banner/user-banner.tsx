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
import { useAuthN } from '@porrtal/r-user';
import { useState } from 'react';
import LoginDialog from './login-dialog/login-dialog';
import styles from './user-banner.module.scss';

/* eslint-disable-next-line */
export interface UserBannerProps {}

export function UserBanner(props: UserBannerProps) {
  const auth = useAuthN();
  const [open, setOpen] = useState(false);

  console.log(
    `UserBanner: auth def'd(${auth ? 'true' : 'false'}), isAuthenticated('${
      auth?.isAuthenticated
    }'), isInitialized('${auth?.isInitialized}')`
  );
  if (auth?.isInitialized) {
    return (
      <div className={styles['container']}>
        {auth?.isAuthenticated && (
          <span className={styles['user-name']}>{auth?.user?.name}</span>
        )}
        {!auth?.isAuthenticated && (
          <button
            onClick={() => {
              if (!auth) {
                return;
              }
              switch (auth.loginStrategy) {
                case 'loginWithRedirect':
                  auth?.loginWithRedirect ? auth?.loginWithRedirect() : null;
                  break;

                case 'login':
                case 'loginAndRegister':
                  setOpen(true);
                  break;
              }
            }}
          >
            Login
          </button>
        )}
        {auth?.isAuthenticated && (
          <button onClick={() => (auth?.logout ? auth?.logout() : null)}>
            Logout
          </button>
        )}
        <LoginDialog
          open={open}
          loginStrategy={
            auth.loginStrategy === 'loginWithRedirect'
              ? 'login'
              : 'loginAndRegister'
          }
          onClose={(result) => {
            if (result.type === 'login') {
              auth.login &&
                auth.login({
                  identifier: result.identifier,
                  password: result.password,
                });
            }

            if (result.type === 'register') {
              auth.register &&
                auth.register({
                  username: result.user,
                  email: result.email,
                  password: result.password,
                });
            }

            setOpen(false);
          }}
        ></LoginDialog>
      </div>
    );
  } else {
    return <div className={styles['container']}>loading...</div>;
  }
}

export default UserBanner;
