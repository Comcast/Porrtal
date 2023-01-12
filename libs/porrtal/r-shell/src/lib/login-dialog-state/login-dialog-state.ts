import { Dispatch, ReactNode, Reducer, useReducer } from "react";

export type LoginDialogResult =
  | { type: 'login'; identifier: string; password: string }
  | { type: 'register'; user: string; email: string; password: string }
  | { type: 'cancel' };

export type LoginStrategy = 'login' | 'loginAndRegister';

export interface LoginDialogProps {
  open: boolean;
  loginStrategy: LoginStrategy;
  onClose: (result: LoginDialogResult) => void;
  children?: ReactNode;
}

export type LoginType = 'login' | 'register';

export interface LoginState {
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

export function useLoginDialogState() {
    return useReducer(reducer, initialState);
}
