import {
  RECEIVE_LIKES,
  RECEIVE_LIKERS
} from '../actions/like_actions';

const initialState = {
  likes: {}
};

const LikeReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LIKES:
      return {
        likes: action.likes
      };
    case RECEIVE_LIKERS:
      return {
        likers: action.likers
      };
    default:
      return state;
  }
};

export default LikeReducer;
