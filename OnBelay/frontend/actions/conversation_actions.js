import * as APIUtil from '../util/conversation_api_util';

export const RECEIVE_CURRENT_CONVERSATION = "RECEIVE_CURRENT_CONVERSATION";
export const RECEIVE_CONVERSATIONS = "RECEIVE_CONVERSATIONS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const fetchSingleConversation = (thread_id) => {
  return (dispatch) => {
    return APIUtil.fetchSingleConversation(thread_id)
      .then(
        (conversation) => dispatch(receiveCurrentConversation(conversation)),
        (errors) => dispatch(receiveErrors(errors.responseJSON))
      );
  };
};

export const fetchConversations = () => {
  return (dispatch) => {
    return APIUtil.fetchConversations()
      .then(
        (conversations) => dispatch(receiveConversations(conversations)),
        (errors) => dispatch(receiveErrors(errors.responseJSON))
      );
  };
};

export const createConversation = (conversation) => {
  return (dispatch) => {
    return APIUtil.postConversation(conversation)
      .then(
        (conversation) => dispatch(receiveCurrentConversation(conversation)),
        (errors) => dispatch(receiveErrors(errors.responseJSON))
      );
  };
};

export const createMessage = (message) => {
  return (dispatch) => {
    return APIUtil.postMessage(message)
      .then(
        (conversation) => dispatch(receiveCurrentConversation(conversation)),
        (errors) => dispatch(receiveErrors(errors.responseJSON))
      );
  };
};


export const receiveCurrentConversation = (currentConversation) => {
  return {
    type: RECEIVE_CURRENT_CONVERSATION,
    currentConversation
  };
};

export const receiveConversations = (conversations) => {
  return {
    type: RECEIVE_CONVERSATIONS,
    conversations
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};
