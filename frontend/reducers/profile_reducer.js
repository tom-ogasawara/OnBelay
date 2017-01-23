import { RECEIVE_CURRENT_PROFILE, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/profile_actions';

const initialState = {
  currentProfile: null,
  errors: {}
};

const ProfileReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_PROFILE:
      return { currentProfile: action.user, errors: {} };
    case RECEIVE_ERRORS:
      return { currentProfile: null, errors: action.errors };
    case CLEAR_ERRORS:
      return { currentProfile: action.user, errors: {} };
    default:
      return state;
  }
};

export default ProfileReducer;
