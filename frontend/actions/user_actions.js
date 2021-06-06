import * as UserAPIUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const CLEAR_USER_ERRORS = "CLEAR_USER_ERRORS";

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const receiveUserErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_USER_ERRORS
});

export const fetchUser = userId => dispatch =>
  UserAPIUtil.fetchUser(userId)
  .then(user => dispatch(receiveUser(user)))
  .fail(errors => dispatch(receiveUserErrors(errors.responseJSON)));

export const updateUser = (user, formData) => dispatch =>
  UserAPIUtil.updateUser(user, formData)
  .then(user => dispatch(receiveUser(user)))
  .fail(errors => dispatch(receiveUserErrors(errors.responseJSON)));
