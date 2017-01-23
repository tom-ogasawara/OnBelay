import * as APIUtil from '../util/question_api_util';

export const RECEIVE_CURRENT_QUESTION = "RECEIVE_SINGLE_QUESTION";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

export const fetchSingleQuestion = (question_id) => {
  return (dispatch) => {
    return APIUtil.fetchSingleQuestion(question_id)
      .then((question) => dispatch(receiveSingleQuestion(question)));
  };
};

export const fetchQuestions = () => {
  return (dispatch) => {
    return APIUtil.fetchQuestions()
      .then((questions) => dispatch(receiveQuestions(questions)));
  };
};

export const receiveCurrentQuestion = (question) => {
  return {
    type: RECEIVE_CURRENT_QUESTION,
    question
  };
};

export const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
};
