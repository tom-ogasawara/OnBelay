export const fetchSingleQuestion = (question_id) => {
  return $.ajax({
    method: "GET",
    url: `api/questions/${question_id}`,
  });
};

export const fetchQuestions = () => {
  return $.ajax({
    method: "GET",
    url: `api/questions`,
  });
};
