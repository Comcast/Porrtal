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
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import { ChangeEvent, ReactNode, Reducer, useReducer, useState } from 'react';
import styles from './login-dialog.module.scss';

type LoginDialogResult =
  | { type: 'login'; identifier: string; password: string }
  | { type: 'register'; user: string; email: string; password: string }
  | { type: 'cancel' };

type LoginStrategy = 'login' | 'loginAndRegister';

interface LoginDialogProps {
  open: boolean;
  loginStrategy: LoginStrategy;
  onClose: (result: LoginDialogResult) => void;
  children?: ReactNode;
}

type LoginType = 'login' | 'register';

interface LoginState {
  loginType: LoginType;
  identifier?: string;
  identifierVisited: boolean;
  identifierHasError: boolean;
  identifierErrorMessage?: string;
  password?: string;
  passwordVisited: boolean;
  passwordHasError: boolean;
  passwordErrorMessage?: string;
  name?: string;
  nameVisited: boolean;
  nameHasError: boolean;
  nameErrorMessage?: string;
  email?: string;
  emailVisited: boolean;
  emailHasError: boolean;
  emailErrorMessage?: string;
  passwordVerify?: string;
  passwordVerifyVisited: boolean;
  passwordVerifyHasError: boolean;
  passwordVerifyErrorMessage?: string;
}

export type LoginAction =
  | { type: 'setLoginType'; loginType: LoginType }
  | { type: 'setIdentifier'; value: string }
  | { type: 'setPassword'; value: string }
  | { type: 'setName'; value: string }
  | { type: 'setEmail'; value: string }
  | { type: 'setPasswordVerify'; value: string };

const reducer: Reducer<LoginState, LoginAction> = (state, action) => {
  switch (action.type) {
    case 'setLoginType': {
      return validate({ ...state, loginType: action.loginType });
    }

    case 'setIdentifier': {
      return validate({
        ...state,
        identifier: action.value,
        identifierVisited: true,
      });
    }

    case 'setPassword': {
      return validate({
        ...state,
        password: action.value,
        passwordVisited: true,
      });
    }

    case 'setName': {
      return validate({
        ...state,
        name: action.value,
        nameVisited: true,
      });
    }

    case 'setEmail': {
      return validate({
        ...state,
        email: action.value,
        emailVisited: true,
      });
    }

    case 'setPasswordVerify': {
      return validate({
        ...state,
        passwordVerify: action.value,
        passwordVerifyVisited: true,
      });
    }
  }
};

const validate = (loginState: LoginState): LoginState => {
  // identifier
  loginState.identifierHasError =
    loginState.identifierVisited &&
    (!loginState.identifier || loginState.identifier.length === 0);
  loginState.identifierErrorMessage = loginState.identifierHasError
    ? 'identifier is required.'
    : '';

  // name
  loginState.nameHasError =
    loginState.nameVisited &&
    (!loginState.name || loginState.name.length === 0);
  loginState.nameErrorMessage = loginState.nameHasError
    ? 'name is required.'
    : '';

  // email
  if (loginState.emailVisited) {
    if (loginState.email && loginState.email.length > 0) {
      const emailRegex = new RegExp(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      );
      if (emailRegex.test(loginState.email)) {
        loginState.emailHasError = false;
        loginState.emailErrorMessage = '';
      } else {
        loginState.emailHasError = true;
        loginState.emailErrorMessage = 'email is not valid.';
      }
    } else {
      loginState.emailHasError = true;
      loginState.emailErrorMessage = 'email is required.';
    }
  }

  // password
  const passwordRegex = new RegExp(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/);
  loginState.passwordHasError = false;
  loginState.passwordErrorMessage = '';
  if (loginState.passwordVisited) {
    if (!loginState.password || loginState.password.length < 6) {
      loginState.passwordHasError = true;
      loginState.passwordErrorMessage +=
        'password must be at least 6 characters.  ';
    }

    if (loginState.password && loginState.password.length > 12) {
      loginState.passwordHasError = true;
      loginState.passwordErrorMessage +=
        'password must be not be longer than 12 characters.  ';
    }

    if (loginState.password && !passwordRegex.test(loginState.password)) {
      loginState.passwordHasError = true;
      loginState.passwordErrorMessage +=
        'password must contain a letter and a number.';
    }
  }

  // password verify
  if (loginState.passwordVerifyVisited && loginState.passwordVisited) {
    if (loginState.password !== loginState.passwordVerify) {
      loginState.passwordVerifyHasError = true;
      loginState.passwordVerifyErrorMessage = 'password does not match.';
    } else {
      loginState.passwordVerifyHasError = false;
      loginState.passwordVerifyErrorMessage = '';
    }
  }
  return loginState;
};

const initialState: LoginState = {
  loginType: 'login',
  identifierVisited: false,
  identifierHasError: false,
  passwordVisited: false,
  passwordHasError: false,
  nameVisited: false,
  nameHasError: false,
  emailVisited: false,
  emailHasError: false,
  passwordVerifyVisited: false,
  passwordVerifyHasError: false,
};

export function LoginDialog(props: LoginDialogProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClose = () => {
    props.onClose({
      type: 'login',
      identifier: 'user-one',
      password: 'xxxxx1',
    });
  };

  return (
    <Dialog onClose={handleClose} open={props.open}>
      <DialogTitle>
        <span>
          {props.loginStrategy === 'loginAndRegister' &&
          state.loginType === 'register'
            ? 'Register'
            : 'Login'}
        </span>
        {props.loginStrategy === 'loginAndRegister' &&
          state.loginType === 'register' && (
            <a
              className={styles['dialog-link']}
              onClick={() =>
                dispatch({
                  type: 'setLoginType',
                  loginType: 'login',
                })
              }
            >
              login
            </a>
          )}
        {props.loginStrategy === 'loginAndRegister' &&
          state.loginType === 'login' && (
            <a
              className={styles['dialog-link']}
              onClick={() =>
                dispatch({
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
        {state.loginType === 'login' && (
          <>
            <TextField
              style={{marginTop: 10}}
              error={state.identifierHasError}
              helperText={state.identifierErrorMessage}
              fullWidth
              id="identifier"
              label="Identifier"
              variant="standard"
              onChange={(evt) =>
                dispatch({
                  type: 'setIdentifier',
                  value: evt.target.value,
                })
              }
            />
            <TextField
              style={{marginTop: 10}}
              fullWidth
              error={state.passwordHasError}
              helperText={state.passwordErrorMessage}
              id="password"
              label="Password"
              variant="standard"
              type="password"
              onChange={(evt) =>
                dispatch({
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
                  state.identifierHasError ||
                  state.passwordHasError ||
                  !state.identifier ||
                  state.identifier.length < 1 ||
                  !state.password ||
                  state.password.length < 1
                }
                onClick={() => {
                  if (state.identifier && state.password) {
                    props.onClose({
                      type: 'login',
                      identifier: state.identifier,
                      password: state.password,
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
        {state.loginType === 'register' && (
          <>
            <TextField
              style={{marginTop: 10}}
              error={state.nameHasError}
              helperText={state.nameErrorMessage}
              fullWidth
              id="name"
              label="Name"
              variant="standard"
              onChange={(evt) =>
                dispatch({
                  type: 'setName',
                  value: evt.target.value,
                })
              }
            />
            <TextField
              style={{marginTop: 10}}
              fullWidth
              error={state.emailHasError}
              helperText={state.emailErrorMessage}
              id="email"
              label="Email"
              variant="standard"
              onChange={(evt) =>
                dispatch({
                  type: 'setEmail',
                  value: evt.target.value,
                })
              }
            />
            <TextField
              style={{marginTop: 10}}
              fullWidth
              error={state.passwordHasError}
              helperText={state.passwordErrorMessage}
              id="password"
              label="Password"
              variant="standard"
              type="password"
              onChange={(evt) =>
                dispatch({
                  type: 'setPassword',
                  value: evt.target.value,
                })
              }
            />
            <TextField
              style={{marginTop: 10}}
              fullWidth
              error={state.passwordVerifyHasError}
              helperText={state.passwordVerifyErrorMessage}
              id="passwordVerify"
              label="Verify Password"
              variant="standard"
              type="password"
              onChange={(evt) =>
                dispatch({
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
                  state.nameHasError ||
                  state.emailHasError ||
                  state.passwordHasError ||
                  state.passwordVerifyHasError ||
                  !state.name ||
                  state.name.length < 1 ||
                  !state.email ||
                  state.email.length < 1 ||
                  !state.password ||
                  state.password.length < 1
                }
                variant="contained"
                onClick={() => {
                  if (state.name && state.email && state.password) {
                    props.onClose({
                      type: 'register',
                      user: state.name,
                      email: state.email,
                      password: state.password,
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
