import * as APIUtil from '../util/like_api_util';

export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const RECEIVE_LIKERS = "RECEIVE_LIKERS";


export const fetchLikes = (from_id) => {
  return (dispatch) => {
    return APIUtil.fetchLikes(from_id)
      .then((likes) => dispatch(receiveLikes(likes)));
  };
};

export const fetchLikers = (from_id) => {
  return (dispatch) => {
    return APIUtil.fetchLikers(from_id)
      .then((likes) => dispatch(receiveLikers(likes)));
  };
};

export const createLike = (like) => {
  return (dispatch) => {
    return APIUtil.postLike(like)
      .then((likes) => dispatch(receiveLikes(likes)));
  };
};

export const destroyLike = (like_id) => {
  return (dispatch) => {
    return APIUtil.destroyLike(like_id)
      .then((likes) => dispatch(receiveLikes(likes)));
  };
};

export const receiveLikes = (likes) => {
  return {
    type: RECEIVE_LIKES,
    likes
  };
};

export const receiveLikers = (likes) => {
  return {
    type: RECEIVE_LIKERS,
    likes
  };
};
