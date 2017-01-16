import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answerId: null,
      acceptableAnswers: [],
      importance: 0,
      explanation: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.questionStack = this.questionStack.bind(this);
    this.answeredQuestions = this.answeredQuestions.bind(this);
    this.handleAcceptable = this.handleAcceptable.bind(this);
    this.handleImportance = this.handleImportance.bind(this);
    this.handleExplanation = this.handleExplanation.bind(this);
    this.renderAnswers = this.renderAnswers.bind(this);
    this.renderAcceptables = this.renderAcceptables.bind(this);
    this.renderImportance = this.renderImportance.bind(this);
    this.renderExplanation = this.renderExplanation.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.importance === 0) {
      this.setState({ importance: 10 });
    }

    const newResponse = {
      answer_id: this.state.answerId,
      user_id: this.props.currentUser.id,
      acceptable_answers: this.state.acceptableAnswers,
      importance: this.state.importance,
      explanation: this.state.explanation
    };


    this.props.createResponse(newResponse)
      .then(
        this.setState({
          answerId: null,
          acceptableAnswers: [],
          importance: 0,
          explanation: ""
        })
      );
  }

  handleAnswer(e) {
    this.setState({ answerId: e.currentTarget.value });
  }

  handleAcceptable(e) {
    const newArray = this.state.acceptableAnswers.slice();

    if (newArray.includes(e.currentTarget.value)) {
      const acc_index = newArray.indexOf(e.currentTarget.value);
      newArray.splice(acc_index, 1);
      this.setState({ acceptable_answers: newArray });
    } else {
      newArray.push(e.currentTarget.value);
      this.setState({ acceptableAnswers: newArray });
    }
  }

  handleImportance(e) {
    this.setState({ importance: e.currentTarget.value });
  }

  handleExplanation(e) {
    this.setState({ explanation: e.currentTarget.value });
  }

  questionStack() {
    if (this.props.questions) {
      const unanswered = Object.keys(this.props.questions).map((question) => {
        if (this.answeredQuestions().includes(parseInt(question))) {
          return;
        } else {
          return this.props.questions[question];
        }
      }).filter((val) => val !== undefined);

      return unanswered;
    } else {
      return {};
    }
  }

  answeredQuestions() {
    return (
      Object.keys(this.props.responses).map((response) => {
        return this.props.responses[response].question.id;
      })
    );
  }

  renderAnswers() {
    const answers = this.questionStack()[0].answers.map((answer) => {
      return ([
        <label
          htmlFor={"radio-answer-" + answer.id}
          key={answer.id}
          className="radio-answer" >
          <input
            id={"radio-answer-" + answer.id}
            value={ answer.id }
            name="my-answer"
            type="radio"
            onClick={ this.handleAnswer }
            />
          {answer.body}
        </label>
      ]);
    });

    return (
      <div className="user-answers" >
        {answers}
      </div>
    );
  }

  renderAcceptables() {
    const acceptables = this.questionStack()[0].answers.map((answer) => {
      return (
        <label className="acceptables-answer" key={ answer.id }>
          <input type="checkbox"
            value={ answer.body }
            onClick={ this.handleAcceptable }
            />
          {answer.body}
        </label>
      );
    });

    return (
      <div className="user-acceptables">
        <div className="acceptables-title">
          <p>Answer(s) you won't accept</p>
        </div>
        {acceptables}
      </div>
    );
  }

  renderImportance() {
    return(
      <div className="user-importance">
        <div className="importance-title">
          <p>Importance</p>
        </div>
        <div className="importance-radios group">
          <label className="importance-answer" htmlFor="importance-answer-1" >
              <input
                id="importance-answer-1"
                name="importance-answer"
                value={ 1 }
                type="radio"
                checked={ this.state.importance == 1 }
                onClick={ this.handleImportance }
                />
              <div className="importance-bar"></div>
              A little
          </label>
          <label className="importance-answer" htmlFor="importance-answer-2" >
              <input
                id="importance-answer-2"
                name="importance-answer"
                value={ 10 }
                type="radio"
                checked={ this.state.importance == 10 }
                onClick={ this.handleImportance }
                />
              <div className="importance-bar"></div>
              Somewhat
          </label>
          <label className="importance-answer" htmlFor="importance-answer-3" >
              <input
                id="importance-answer-3"
                name="importance-answer"
                value={ 50 }
                type="radio"
                checked={ this.state.importance == 50 }
                onClick={ this.handleImportance }
                />
              <div className="importance-bar"></div>
              Very
          </label>
        </div>
      </div>
    );
  }

  renderExplanation() {
    return (
      <div className="user-explanation">
        <div className="explanation-input-container">
          <textarea
            className="explanation-textarea"
            value={ this.state.explanation }
            onChange={ this.handleExplanation }
            placeholder="Explain your answer (optional)"
            />
        </div>
      </div>
    );
  }

  renderForm() {
    if (this.questionStack().length > 0) {
      return (
        <div className="question-form">
          <div className="question-title">
            <p>{this.questionStack()[0].title}</p>
          </div>
          <div className="answers-container">
            <form className="answers-form">
              {this.renderAnswers()}
              {this.renderAcceptables()}
              {this.renderImportance()}
              {this.renderExplanation()}
              <input type="submit" value="Answer" className="answer-button" onClick={ this.handleSubmit }/>
            </form>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    if (this.props.questions) {
      return (
        <div className="new-question">
          {this.renderForm()}
        </div>
      );
    } else {
      return <div></div>;
    }
  }

}

export default QuestionForm;
