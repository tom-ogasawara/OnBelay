import { connect } from 'react-redux';
import { fetchSingleConversation, createMessage, receiveCurrentConversation } from '../../actions/conversation_actions';
import Chat from './chat';


const mapStateToProps = (state) => ({
  profile: state.currentProfile.currentProfile,
  currentUser: state.session.currentUser,
  currentConversation: state.conversations.currentConversation
});

const mapDispatchToProps = dispatch => ({
  fetchSingleConversation: (conversation_id) => dispatch(fetchSingleConversation(conversation_id)),
  createMessage: (message) => dispatch(createMessage(message)),
  receiveCurrentConversation: (conversation) => dispatch(receiveCurrentConversation(conversation)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
