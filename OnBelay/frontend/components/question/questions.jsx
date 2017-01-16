import React from 'react';
import QuestionFormContainer from './question_form_container';

class Questions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    this.answeredQuestions = this.answeredQuestions.bind(this);
    this.answeredQuestionRender = this.answeredQuestionRender.bind(this);
    this.responseIdArray = this.responseIdArray.bind(this);
    this.responseAcceptableArray = this.responseAcceptableArray.bind(this);
    this.questionFormRender = this.questionFormRender.bind(this);
    this.questionFormHeader = this.questionFormHeader.bind(this);
  }

  answeredQuestions() {
    if (this.props.responses) {
      return (
        Object.keys(this.props.responses).map((response) => {
          return this.props.responses[response].question;
        })
      );
    }
  }

  responseIdArray() {
    return (
      Object.keys(this.props.responses).map((response) => {
        return this.props.responses[response].answer_id;
      })
    );
  }

  responseAcceptableArray(question_id) {
    let acceptables = null;
    Object.keys(this.props.responses).forEach((response) => {
      if (this.props.responses[response].question.id === question_id) {
        acceptables =  this.props.responses[response].acceptable_answers;
      }
    });

    return acceptables;
  }

  answeredQuestionRender() {
    const answeredQuestions = this.answeredQuestions().map((question) => {
      const questionAnswers = this.props.questions[question.id].answers;

      const answerDisplay = questionAnswers.map((answer) => {
        if (this.responseIdArray().includes(answer.id)) {
          return <p key={answer.id} className="question-answer match-response">{answer.body + "  ✓"}</p>;
        } else if (this.responseAcceptableArray(question.id).includes(answer.body)) {
          return <p key={answer.id} className="question-answer match-response">{answer.body}</p>;
        } else {
          return <p key={answer.id} className="question-answer crossed">{answer.body}</p>;
        }
      });

      return (
        <div className="answered-question" key={ question.id }>
          <div className="question-content">
            <div className="question-content-title">
              <p className="actual-title">{question.title}</p>
              {answerDisplay}
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="answered-questions-content">
        {answeredQuestions}
      </div>
    );
  }

  questionFormHeader() {
    if (this.props.profile.id === this.props.currentUser.id) {
      return <h2 className="questions-header">Match Questions</h2>;
    } else {
      return <div></div>;
    }
  }

  questionFormRender() {
    if (this.props.profile.id === this.props.currentUser.id) {
      return <QuestionFormContainer questions={ this.props.questions } />;
    } else {
      return <div></div>;
    }
  }

  render() {
    if (this.props.questions) {
      return (
        <div className="content-questions group">
          <div className="main-questions">
            {this.questionFormHeader()}
            {this.questionFormRender()}
            <h2 className="show-questions-header">Show Questions</h2>
            <div className="answered-questions">
              {this.answeredQuestionRender()}
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default Questions;
