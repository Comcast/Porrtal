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
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { LoginDialogProps, useLoginDialogState } from '@porrtal/r-shell';
import { useReducer, KeyboardEvent } from 'react';
import styles from './login-dialog.module.scss';

export function LoginDialog(props: LoginDialogProps) {
  const [loginDialogState, loginDialogDispatch] = useLoginDialogState();

  const handleClose = () => {
    props.onClose({ type: 'cancel' });
  };

  return (
    <Dialog
      onClose={handleClose}
      open={props.open}
      onKeyUp={(evt: KeyboardEvent<HTMLDivElement>) => {
        if (evt.key === 'Enter') {
          if (loginDialogState.loginType === 'login') {
            if (
              !(
                loginDialogState.identifierHasError ||
                loginDialogState.passwordHasError ||
                !loginDialogState.identifier ||
                loginDialogState.identifier.length < 1 ||
                !loginDialogState.password ||
                loginDialogState.password.length < 1
              ) &&
              loginDialogState.identifier &&
              loginDialogState.password
            ) {
              props.onClose({
                type: 'login',
                identifier: loginDialogState.identifier,
                password: loginDialogState.password,
              });
            } else {
              evt.stopPropagation();
            }
          } else {
            if (
              !(
                loginDialogState.nameHasError ||
                loginDialogState.emailHasError ||
                loginDialogState.passwordHasError ||
                loginDialogState.passwordVerifyHasError ||
                !loginDialogState.name ||
                loginDialogState.name.length < 1 ||
                !loginDialogState.email ||
                loginDialogState.email.length < 1 ||
                !loginDialogState.password ||
                loginDialogState.password.length < 1
              ) &&
              loginDialogState.name &&
              loginDialogState.email &&
              loginDialogState.password
            ) {
              props.onClose({
                type: 'register',
                user: loginDialogState.name,
                email: loginDialogState.email,
                password: loginDialogState.password,
              });
            } else {
              evt.stopPropagation();
            }
          }
        }
      }}
    >
      <DialogTitle>
        <span>
          {props.loginStrategy === 'loginAndRegister' &&
          loginDialogState.loginType === 'register'
            ? 'Register'
            : 'Login'}
        </span>
        {props.loginStrategy === 'loginAndRegister' &&
          loginDialogState.loginType === 'register' && (
            <a
              className={styles['dialog-link']}
              onClick={() =>
                loginDialogDispatch({
                  type: 'setLoginType',
                  loginType: 'login',
                })
              }
            >
              login
            </a>
          )}
        {props.loginStrategy === 'loginAndRegister' &&
          loginDialogState.loginType === 'login' && (
            <a
              className={styles['dialog-link']}
              onClick={() =>
                loginDialogDispatch({
                  type: 'setLoginType',
                  loginType: 'register',
                })
              }
            >
              register
            </a>
          )}
      </DialogTitle>
      <DialogContent>
        {/* ----- login ---- */}
        {loginDialogState.loginType === 'login' && (
          <>
            <TextField
              style={{ marginTop: 10 }}
              error={loginDialogState.identifierHasError}
              helperText={loginDialogState.identifierErrorMessage}
              fullWidth
              id="identifier"
              label="Identifier"
              variant="standard"
              onChange={(evt) =>
                loginDialogDispatch({
                  type: 'setIdentifier',
                  value: evt.target.value,
                })
              }
            />
            <TextField
              style={{ marginTop: 10 }}
              fullWidth
              error={loginDialogState.passwordHasError}
              helperText={loginDialogState.passwordErrorMessage}
              id="password"
              label="Password"
              variant="standard"
              type="password"
              onChange={(evt) =>
                loginDialogDispatch({
                  type: 'setPassword',
                  value: evt.target.value,
                })
              }
            />
            <span className={styles['dialog-buttons']}>
              <span></span>
              <Button
                variant="outlined"
                onClick={() => {
                  props.onClose({ type: 'cancel' });
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                disabled={
                  loginDialogState.identifierHasError ||
                  loginDialogState.passwordHasError ||
                  !loginDialogState.identifier ||
                  loginDialogState.identifier.length < 1 ||
                  !loginDialogState.password ||
                  loginDialogState.password.length < 1
                }
                onClick={() => {
                  if (
                    loginDialogState.identifier &&
                    loginDialogState.password
                  ) {
                    props.onClose({
                      type: 'login',
                      identifier: loginDialogState.identifier,
                      password: loginDialogState.password,
                    });
                  }
                }}
              >
                Login
              </Button>
            </span>
          </>
        )}

        {/* ---- register ---- */}
        {loginDialogState.loginType === 'register' && (
          <>
            <TextField
              style={{ marginTop: 10 }}
              error={loginDialogState.nameHasError}
              helperText={loginDialogState.nameErrorMessage}
              fullWidth
              id="name"
              label="Name"
              variant="standard"
              onChange={(evt) =>
                loginDialogDispatch({
                  type: 'setName',
                  value: evt.target.value,
                })
              }
            />
            <TextField
              style={{ marginTop: 10 }}
              fullWidth
              error={loginDialogState.emailHasError}
              helperText={loginDialogState.emailErrorMessage}
              id="email"
              label="Email"
              variant="standard"
              onChange={(evt) =>
                loginDialogDispatch({
                  type: 'setEmail',
                  value: evt.target.value,
                })
              }
            />
            <TextField
              style={{ marginTop: 10 }}
              fullWidth
              error={loginDialogState.passwordHasError}
              helperText={loginDialogState.passwordErrorMessage}
              id="password"
              label="Password"
              variant="standard"
              type="password"
              onChange={(evt) =>
                loginDialogDispatch({
                  type: 'setPassword',
                  value: evt.target.value,
                })
              }
            />
            <TextField
              style={{ marginTop: 10 }}
              fullWidth
              error={loginDialogState.passwordVerifyHasError}
              helperText={loginDialogState.passwordVerifyErrorMessage}
              id="passwordVerify"
              label="Verify Password"
              variant="standard"
              type="password"
              onChange={(evt) =>
                loginDialogDispatch({
                  type: 'setPasswordVerify',
                  value: evt.target.value,
                })
              }
            />
            <span className={styles['dialog-buttons']}>
              <span></span>
              <Button
                variant="outlined"
                onClick={() => {
                  props.onClose({ type: 'cancel' });
                }}
              >
                Cancel
              </Button>
              <Button
                disabled={
                  loginDialogState.nameHasError ||
                  loginDialogState.emailHasError ||
                  loginDialogState.passwordHasError ||
                  loginDialogState.passwordVerifyHasError ||
                  !loginDialogState.name ||
                  loginDialogState.name.length < 1 ||
                  !loginDialogState.email ||
                  loginDialogState.email.length < 1 ||
                  !loginDialogState.password ||
                  loginDialogState.password.length < 1
                }
                variant="contained"
                onClick={() => {
                  if (
                    loginDialogState.name &&
                    loginDialogState.email &&
                    loginDialogState.password
                  ) {
                    props.onClose({
                      type: 'register',
                      user: loginDialogState.name,
                      email: loginDialogState.email,
                      password: loginDialogState.password,
                    });
                  }
                }}
              >
                Register
              </Button>
            </span>
          </>
        )}

        {props.children}
      </DialogContent>
    </Dialog>
  );
}

export default LoginDialog;
