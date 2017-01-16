export const fetchSingleConversation = (thread_id) => {
  return $.ajax({
    method: "GET",
    url: `api/conversations/${thread_id}`
  });
};

export const fetchConversations = () => {
  return $.ajax({
    method: "GET",
    url: "api/conversations"
  });
};

export const postConversation = (conversation) => {
  return $.ajax({
    method: "POST",
    url: "api/conversations",
    data: { conversation }
  });
};

export const postMessage = (message) => {
  return $.ajax({
    method: "POST",
    url: `api/conversations/${message.thread_id}/messages`,
    data: { message }
  });
};
