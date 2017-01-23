import { RECEIVE_USERS } from '../actions/user_actions';

const initialState = {
  users: {}
};

const UserReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USERS:
      return { users: action.users };
    default:
      return state;
  }
};

export default UserReducer;
