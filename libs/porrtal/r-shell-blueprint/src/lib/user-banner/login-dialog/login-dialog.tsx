/*
Copyright 2023 Comcast Cable Communications Management, LLC

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
import { Button, Dialog, InputGroup } from '@blueprintjs/core';
import { LoginDialogProps, useLoginDialogState } from '@porrtal/r-shell';
import styles from './login-dialog.module.scss';
import { KeyboardEvent } from 'react';

export function LoginDialog(props: LoginDialogProps) {
  const [loginDialogState, loginDialogDispatch] = useLoginDialogState();

  const handleClose = () => {
    props.onClose({ type: 'cancel' });
  };

  return (
    <Dialog
      onClose={handleClose}
      isOpen={props.open}
      title={loginDialogState.loginType === 'register' ? 'Register' : 'Login'}
    >
      <div
        className={styles['container']}
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
        <div className={styles['changer-container']}>
          <span></span>
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
                onClick={() => {
                  loginDialogDispatch({
                    type: 'setLoginType',
                    loginType: 'register',
                  });
                }}
              >
                register
              </a>
            )}
        </div>

        {/* ----- login ---- */}
        {loginDialogState.loginType === 'login' && (
          <>
            <div className={styles['error-text']}>
              {loginDialogState.identifierErrorMessage}
            </div>
            <InputGroup
              fill
              id="identifier"
              intent={loginDialogState.identifierHasError ? 'danger' : 'none'}
              placeholder="Identifier"
              onChange={(evt) =>
                loginDialogDispatch({
                  type: 'setIdentifier',
                  value: evt.target.value,
                })
              }
            />
            <div className={styles['error-text']}>
              {loginDialogState.passwordErrorMessage}
            </div>
            <InputGroup
              fill
              id="identifier"
              intent={loginDialogState.passwordHasError ? 'danger' : 'none'}
              placeholder="Password"
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
                onClick={() => {
                  props.onClose({ type: 'cancel' });
                }}
              >
                Cancel
              </Button>
              <Button
                intent="primary"
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
            <div className={styles['error-text']}>
              {loginDialogState.nameErrorMessage}
            </div>
            <InputGroup
              fill
              id="name"
              intent={loginDialogState.nameHasError ? 'danger' : 'none'}
              placeholder="Name"
              onChange={(evt) =>
                loginDialogDispatch({
                  type: 'setName',
                  value: evt.target.value,
                })
              }
            />
            <div className={styles['error-text']}>
              {loginDialogState.emailErrorMessage}
            </div>
            <InputGroup
              fill
              id="email"
              intent={loginDialogState.emailHasError ? 'danger' : 'none'}
              placeholder="Email"
              onChange={(evt) =>
                loginDialogDispatch({
                  type: 'setEmail',
                  value: evt.target.value,
                })
              }
            />
            <div className={styles['error-text']}>
              {loginDialogState.passwordErrorMessage}
            </div>
            <InputGroup
              fill
              id="password"
              intent={loginDialogState.passwordHasError ? 'danger' : 'none'}
              placeholder="Password"
              type="password"
              onChange={(evt) =>
                loginDialogDispatch({
                  type: 'setPassword',
                  value: evt.target.value,
                })
              }
            />
            <div className={styles['error-text']}>
              {loginDialogState.passwordVerifyErrorMessage}
            </div>
            <InputGroup
              fill
              id="passwordVerify"
              intent={
                loginDialogState.passwordVerifyHasError ? 'danger' : 'none'
              }
              placeholder="Password Verify"
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
                intent="primary"
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
      </div>
    </Dialog>
  );
}

export default LoginDialog;
