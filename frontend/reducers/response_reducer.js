import { RECEIVE_SINGLE_RESPONSE, RECEIVE_RESPONSES } from '../actions/response_actions';

const initialState = {
  currentResponse: null,
  responses: {}
};

const ResponseReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SINGLE_RESPONSE:
      return { currentResponse: action.response };
    case RECEIVE_RESPONSES:
      return { responses: action.responses };
    default:
      return state;
  }
};

export default ResponseReducer;
