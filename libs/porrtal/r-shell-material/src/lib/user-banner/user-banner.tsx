/*
Copyright 2024 Comcast Cable Communications Management, LLC

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
import { useAuthN, useAuthNDispatch } from '@porrtal/r-user';
import styles from './user-banner.module.scss';
import LoginDialog from './login-dialog/login-dialog';
import { useState } from 'react';
import { Button, Icon, Typography } from '@mui/material';
import { useShellDispatch } from '@porrtal/r-shell';

/* eslint-disable-next-line */
export interface UserBannerProps {}

export function UserBanner(props: UserBannerProps) {
  const auth = useAuthN();
  const authDispatch = useAuthNDispatch();
  const [open, setOpen] = useState(false);
  const shellDispatch = useShellDispatch();

  console.log(
    `UserBanner: auth def'd(${auth ? 'true' : 'false'}), authNState('${
      auth?.authNState
    }')')`
  );

  if (!auth) {
    console.log('No authentication defined for application.');
    return <div></div>;
  }

  if (auth.authNState === 'initialized' || auth.authNState === 'authenticated' || auth.authNState === 'error') {
    return (
      <div className={styles['container']}>
        {auth.authNState === 'authenticated' && (
          <Typography display="inline-block" sx={{ marginRight: '10px' }}>
            {auth?.user?.name}
          </Typography>
        )}
        {auth.authNState === 'error' && (
          <Typography display="inline-block" sx={{ marginRight: '10px' }}>
          error...
        </Typography>
      )}
        {auth.authNState !== 'authenticated' && (
          <Button
            size="small"
            onClick={() => {
              if (!auth) {
                return;
              }
              switch (auth.loginStrategy) {
                case 'loginWithRedirect':
                  authDispatch({
                    type: 'loginWithRedirect',
                  });
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
        {auth.authNState === 'authenticated' && (
          <Button size="small" onClick={() => authDispatch({ type: 'logout' })}>
            Logout
          </Button>
        )}
        <Icon
          onClick={() =>
            shellDispatch({
              type: 'launchView',
              viewId: 'shell-state-dashboard',
            })
          }
        >key</Icon>

        <LoginDialog
          open={open}
          loginStrategy={
            auth.loginStrategy === 'loginWithRedirect'
              ? 'login'
              : 'loginAndRegister'
          }
          onClose={(result) => {
            if (result.type === 'login') {
              authDispatch({
                type: 'login',
                identifier: result.identifier,
                password: result.password,
              });
            }

            if (result.type === 'register') {
              authDispatch({
                type: 'register',
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
    return <div className={styles['container']}>authenticating...</div>;
  } 
}

export default UserBanner;
