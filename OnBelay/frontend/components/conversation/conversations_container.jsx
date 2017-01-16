import { connect } from 'react-redux';
import { fetchConversations } from '../../actions/conversation_actions';
import Conversations from './conversations';


const mapStateToProps = (state) => ({
  profile: state.currentProfile.currentProfile,
  currentUser: state.session.currentUser,
  conversations: state.conversations.conversations
});

const mapDispatchToProps = dispatch => ({
  fetchConversations: () => dispatch(fetchConversations()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Conversations);
