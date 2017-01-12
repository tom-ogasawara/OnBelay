export const fetchProfile = (user_id) => {
  return $.ajax({
    method: "GET",
    url: `api/users/${user_id}`,
  });
};

export const updateProfile = (user) => {
  return $.ajax({
    method: "PATCH",
    url: `api/users/${user.id}`,
    data: { user }
  });
};
