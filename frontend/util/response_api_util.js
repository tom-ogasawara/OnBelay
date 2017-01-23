export const fetchSingleResponse = (response_id) => {
  return $.ajax({
    method: "GET",
    url: `api/responses/${response_id}`
  });
};

export const fetchResponses = (user_id) => {
  return $.ajax({
    method: "GET",
    url: "api/responses",
    data: { response: {user_id} }
  });
};

export const postResponse = (response) => {
  return $.ajax({
    method: "POST",
    url: "api/responses",
    data: { response }
  });
};
