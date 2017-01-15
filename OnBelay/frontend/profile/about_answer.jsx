import React from 'react';

class AboutAnswer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answerText: "",
      previousText: "",
      edit: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.userEditTitle = this.userEditTitle.bind(this);
    this.normalTitle = this.normalTitle.bind(this);
    this.userEditText = this.userEditText.bind(this);
    this.normalText = this.normalText.bind(this);
    this.currentText = this.currentText.bind(this);
  }

  componentDidMount() {
    this.setState({ answerText: this.props.answerText });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ answerText: nextProps.answerText });
  }

  handleClick(e) {
    e.preventDefault();

    this.setState({ previousText: this.state.answerText, edit: true});
  }

  handleChange(e) {
    this.setState({answerText: e.currentTarget.value});
  }

  handleUpdate(e) {
    e.preventDefault();

    const updatedInfo = { [this.props.dataName]: this.state.answerText };
    const user = Object.assign({}, this.props.profile, updatedInfo);
    this.props.updateProfile(user)
      .then(() => {
        this.setState({ edit: false });
      });
  }

  handleCancel(e) {
    e.preventDefault();
    this.setState({ answerText: this.state.previousText, previousText: "", edit: false });
  }

  userEditTitle() {
    return(
      <div>
        <button className="about-button" onClick={ this.handleClick }>
          <span className="about-title">{this.props.answerTitle}</span>
          <span className="edit-pencil"></span>
        </button>
      </div>
    );
  }

  normalTitle() {
    return (
      <div>
        <div className="about-normal group">
          <span className="about-title">{this.props.answerTitle}</span>
        </div>
      </div>
    );
  }

  userEditText() {
    return (
      <form className="edit-text">

        <textarea
          type="text"
          onChange={ this.handleChange }
          placeholder={ this.props.placeHolder }
          value={ this.state.answerText }
          className="inside-text"/>

        <input type="submit" value="Save" className="save-button" onClick={ this.handleUpdate }/>
        <input type="submit" value="Cancel" className="cancel-button" onClick={ this.handleCancel }/>
      </form>
    );
  }

  normalText() {
    let placeHolderText = this.state.answerText;
    let placeHolderBool = false;

    if (!this.state.answerText) {
      placeHolderText = this.props.placeHolder;
      placeHolderBool = true;
    } else if (this.props.currentUser.id === this.props.profile.id && this.state.answerText.length === 0) {
      placeHolderText = this.props.placeHolder;
      placeHolderBool = true;
    }

    if (placeHolderBool) {
      return (
        <div className="placeholder-text">{ placeHolderText }</div>
      );
    } else {
      return (
        <div className="about-text">{ this.state.answerText }</div>
      );
    }
  }

  currentText() {
    if (this.state.edit) {
      return this.userEditText();
    } else {
      return this.normalText();
    }
  }

  render() {
    if (!this.props.currentUser) {
      return null;
    } else if (this.props.currentUser.id === this.props.profile.id) {
      return (
        <div className="about-block">
          {this.userEditTitle()}
          {this.currentText()}
        </div>
      );
    } else {
      return (
        <div className="about-block">
          {this.normalTitle()}
          {this.normalText()}
        </div>
      );
    }
  }
}

export default AboutAnswer;
