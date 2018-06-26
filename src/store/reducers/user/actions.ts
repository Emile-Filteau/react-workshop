import { Action as ReduxAction } from "redux";

export const LOGIN_USER = "LOGIN::USER";
export const LOGOUT_USER = "LOGOUT::USER";

export interface LoginUserAction extends ReduxAction {
  readonly type: typeof LOGIN_USER;
  readonly payload: {
    user: any;
  };
}

export interface LogoutUserAction extends ReduxAction {
  readonly type: typeof LOGOUT_USER;
  readonly payload: {};
}

export type Action = LoginUserAction | LogoutUserAction;
