import { Action, LOGIN_USER, LOGOUT_USER } from "./actions";

export default function user(state = {}, action: Action) {
  switch (action.type) {
    case LOGIN_USER: {
      return action.payload.user;
    }
    case LOGOUT_USER: {
      return {};
    }
  }
  return state;
}
