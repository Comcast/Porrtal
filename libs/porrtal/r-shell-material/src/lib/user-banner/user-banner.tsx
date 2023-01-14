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
import { useAuth } from '@porrtal/r-user';
import styles from './user-banner.module.scss';
import LoginDialog from './login-dialog/login-dialog';
import { useState } from 'react';
import { Button, Typography } from '@mui/material';

/* eslint-disable-next-line */
export interface UserBannerProps {}

export function UserBanner(props: UserBannerProps) {
  const auth = useAuth();
  const [open, setOpen] = useState(false);

  console.log(
    `UserBanner: auth def'd(${auth ? 'true' : 'false'}), isAuthenticated('${
      auth?.isAuthenticated
    }'), isInitialized('${auth?.isInitialized}')`
  );

  if (!auth) {
    console.log('No authentication defined for application.');
    return <div></div>;
  }

  if (auth.isInitialized) {
    return (
      <div className={styles['container']}>
        {auth?.isAuthenticated && (
          <Typography display="inline-block" sx={{ marginRight: '10px' }}>
            {auth?.user?.name}
          </Typography>
        )}
        {!auth?.isAuthenticated && (
          <Button
            size="small"
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
          </Button>
        )}
        {auth?.isAuthenticated && (
          <Button
            size="small"
            onClick={() => (auth?.logout ? auth?.logout() : null)}
          >
            Logout
          </Button>
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
