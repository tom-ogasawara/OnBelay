import { connect } from 'react-redux';
import { fetchSingleConversation, createMessage, receiveCurrentConversation } from '../../actions/conversation_actions';
import Chat from './chat';


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  profile: state.currentProfile.currentProfile,
  currentConversation: state.conversations.currentConversation
});

const mapDispatchToProps = dispatch => ({
  fetchSingleConversation: (conversation_id) => dispatch(fetchSingleConversation(conversation_id)),
  receiveCurrentConversation: (conversation) => dispatch(receiveCurrentConversation(conversation)),
  createMessage: (message) => dispatch(createMessage(message)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
