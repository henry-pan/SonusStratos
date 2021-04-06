import * as SessionAPIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const loginUser = user => dispatch =>
  SessionAPIUtil.login(user)
  .then(user => dispatch(receiveCurrentUser(user)))
  .fail(errors => dispatch(receiveErrors(errors.responseJSON)));

export const logoutUser = () => dispatch =>
  SessionAPIUtil.logout()
  .then(() => dispatch(logoutCurrentUser()))
  .fail(errors => dispatch(receiveErrors(errors.responseJSON)));

export const signupUser = user => dispatch =>
  SessionAPIUtil.signup(user)
  .then(user => dispatch(receiveCurrentUser(user)))
  .fail(errors => dispatch(receiveErrors(errors.responseJSON)));
