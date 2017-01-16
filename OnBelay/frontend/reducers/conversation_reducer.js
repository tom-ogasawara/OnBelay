import {
  RECEIVE_CURRENT_CONVERSATION,
  RECEIVE_CONVERSATIONS,
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/conversation_actions';

const initialState = {
  conversations: {},
  currentConversation: {},
  errors: {}
};

const ConversationReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_CONVERSATION:
      return {
        conversations: {},
        currentConversation: action.currentConversation,
        errors: {}
      };
    case RECEIVE_CONVERSATIONS:
      return {
        conversations: action.conversations,
        currentConversation: null,
        errors: {}
      };
    case RECEIVE_ERRORS:
      const newErrorState = Object.assign({}, state, { errors: action.errors });
      return newErrorState;
    case CLEAR_ERRORS:
      const newClearState = Object.assign({}, state, { errors: {} });
      return newClearState;
    default:
      return state;
  }
};

export default ConversationReducer;
