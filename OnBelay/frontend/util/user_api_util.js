export const fetchUsers = (distance) => {
  return $.ajax({
    method: "GET",
    url: "api/users",
    data: { distance }
  });
};
