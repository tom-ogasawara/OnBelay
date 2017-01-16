export const fetchLikes = (from_id) => {
  return $.ajax({
    method: "GET",
    url: "api/likes",
    data: { like: {from_id} }
  });
};

export const fetchLikers = (to_id) => {
  return $.ajax({
    method: "GET",
    url: "api/likes",
    data: { to_id }
  });
};

export const postLike = (like) => {
  return $.ajax({
    method: "POST",
    url: "api/likes",
    data: { like }
  });
};

export const destroyLike = (like_id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/likes/${like_id}`
  });
};
