import { RECEIVE_CURRENT_QUESTION, RECEIVE_QUESTIONS } from '../actions/question_actions';

const initialState = {
  currentQuestion: null,
  questions: {}
};

const QuestionReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_QUESTION:
      return { currentQuestion: action.question };
    case RECEIVE_QUESTIONS:
      return { questions: action.questions };
    default:
      return state;
  }
};

export default QuestionReducer;
