import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textInput: "",
    };

    this.renderDisplay = this.renderDisplay.bind(this);
    this.otherUsername = this.otherUsername.bind(this);
    this.chatForm = this.chatForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.otherUserId = this.otherUserId.bind(this);
  }

  componentDidMount() {
    this.props.fetchSingleConversation(this.props.params.conversationId);
  }

  componentDidUpdate() {
    if (!this.props.currentUser) {
      return;
    }
    var node = ReactDOM.findDOMNode(this.refs.myDiv);
    node.scrollTop = node.scrollHeight;
  }

  handleChange(e) {
    this.setState({textInput: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    const newMessage = {
      thread_id: this.props.currentConversation.conversationId,
      body: this.state.textInput
    };
    this.props.createMessage(newMessage)
      .then(() => {
        this.setState({ textInput: "" });
      });
  }

  renderDisplay() {
    if (!this.props.currentConversation.messages) {
      return (
        <div className="chat-block group">

        </div>
      );
    } else {
      return (
        Object.keys(this.props.currentConversation.messages).map((message) => {
          let message_text = this.props.currentConversation.messages[message].body;
          let message_styling =
          this.props.currentConversation.messages[message].author_id === this.props.currentUser.id ?
          "user-styling" : "other-user-styling";
          return(
            <div className="chat-block group" key={message}>
              <p className={"chat-bubble " + message_styling} >
                {message_text}
              </p>
            </div>
          );
        })
      );
    }
  }

  otherUsername() {
    if (!this.props.currentUser) {
      return null;
    } else if (this.props.currentUser.id === this.props.currentConversation.received_user.id) {
      return this.props.currentConversation.started_user.username;
    } else {
      return this.props.currentConversation.received_user.username;
    }
  }

  otherUserId() {
    if (!this.props.currentUser) {
      return null;
    } else if (this.props.currentUser.id === this.props.currentConversation.received_user.id) {
      return this.props.currentConversation.started_user.id;
    } else {
      return this.props.currentConversation.received_user.id;
    }
  }

  chatForm() {
    return(
      <form onSubmit={ this.handleSubmit } className="chat-form group">
        <input
          type="text"
          value={ this.state.textInput }
          onChange={ this.handleChange }
          placeholder="what's on your mind?"
          className="chat-text-input"
          />

        <input type="submit" value="Send" className="chat-send-button"/>
      </form>
    );
  }

  render() {
    if (!this.props.currentConversation ||
      Object.keys(this.props.currentConversation).length === 0 ||
      !this.props.currentUser) {
      return <div></div>;
    } else {
      return(
        <div className="main-chat">
          <a href={"#/profile/" + this.otherUserId()}><h2 className="chat-other-user">{this.otherUsername()}</h2></a>
          <div ref="myDiv" className="chat-container group">
            {this.renderDisplay()}
          </div>
          <div className="chat-input">
            {this.chatForm()}
          </div>
        </div>
      );
    }
  }
}

export default withRouter(Chat);
