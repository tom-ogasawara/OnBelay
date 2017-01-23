import React from 'react';

class ConversationBox extends React.Component {
  constructor(props) {
    super(props);

    this.otherUser = this.otherUser.bind(this);
  }

  otherUser() {
    if (this.props.currentUser.id === this.props.conversation.user_one_id) {
      return this.props.conversation.received_user.username;
    } else {
      return this.props.conversation.started_user.username;
    }
  }

  render() {
    if (!this.props.conversation.last_message) {
      return (
        <a href={"#/conversations/" + this.props.conversationId}>
          <div className="container-box group">
            <div className="conversation-details">
              <h3 className="conversation-user">{this.otherUser()}</h3>
            </div>
          </div>
        </a>
      );
    } else {
      return(
        <a href={"#/conversations/" + this.props.conversationId}>
          <div className="container-box group">
            <div className="conversation-details">
              <h3 className="conversation-user">{this.otherUser()}</h3>
              <p className="conversation-last">{this.props.conversation.last_message.body}</p>
            </div>
            <p className="conversation-updated">{this.props.conversation.last_message.created_at}</p>
          </div>
        </a>
      );
    }
  }
}

export default ConversationBox;
