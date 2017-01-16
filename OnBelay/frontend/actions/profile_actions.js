import * as APIUtil from '../util/profile_api_util';

export const RECEIVE_CURRENT_PROFILE = "RECEIVE_CURRENT_PROFILE";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const fetchCurrentProfile = (user_id) => {
  return (dispatch) => {
    return APIUtil.fetchProfile(user_id)
      .then((user) => dispatch(receiveCurrentProfile(user)), (errors) => dispatch(receiveErrors(errors.responseJSON)));
  };
};

export const updateProfile = (user) => {
  return (dispatch) => {
    return APIUtil.updateProfile(user)
      .then((user) => dispatch(receiveCurrentProfile(user)), (errors) => dispatch(receiveErrors(errors.responseJSON)));
  };
};

export const updateImage = (formData, user) => {
  return (dispatch) => {
    return APIUtil.updateImage(formData, user)
      .then((user) => dispatch(receiveCurrentProfile(user)), (errors) => dispatch(receiveErrors(errors.responseJSON)));
  };
};

export const receiveCurrentProfile = (user) => {
  return {
    type: RECEIVE_CURRENT_PROFILE,
    user
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
