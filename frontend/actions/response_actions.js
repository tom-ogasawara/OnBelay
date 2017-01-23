import * as APIUtil from '../util/response_api_util';

export const RECEIVE_SINGLE_RESPONSE = "RECEIVE_SINGLE_RESPONSE";
export const RECEIVE_RESPONSES = "RECEIVE_RESPONSES";

export const fetchSingleResponse = (response_id) => {
  return (dispatch) => {
    return APIUtil.fetchSingleResponse(response_id)
      .then((response) => dispatch(receiveSingleResponse(response)));
  };
};

export const fetchResponses = (user_id) => {
  return (dispatch) => {
    return APIUtil.fetchResponses(user_id)
      .then((responses) => dispatch(receiveResponses(responses)));
  };
};

export const createResponse = (response) => {
  return (dispatch) => {
    return APIUtil.postResponse(response)
      .then((responses) => dispatch(receiveResponses(responses)));
  };
};

export const receiveSingleResponse = (response) => {
  return {
    type: RECEIVE_SINGLE_RESPONSE,
    response
  };
};

export const receiveResponses = (responses) => {
  return {
    type: RECEIVE_RESPONSES,
    responses
  };
};
