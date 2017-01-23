import merge from 'lodash/merge';
import { CLEAR_SEARCH, RECEIVE_SEARCH_RESULT } from '../actions/search_actions';

const _defaultState = {
  users: {}
};

const searchReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCH_RESULT:
      return action.res;
    case CLEAR_SEARCH:
      return _defaultState;
    default:
      return state;
  }
};

export default searchReducer;
