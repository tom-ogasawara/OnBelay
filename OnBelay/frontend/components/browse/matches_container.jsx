import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
import { fetchLikes, createLike, destroyLike } from '../../actions/like_actions';
import { fetchQuestions } from '../../actions/question_actions';
import Matches from './matches';


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  likes: state.likes.likes,
  users: state.users.users,
  questions: state.questions.questions
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: (distance) => dispatch(fetchUsers(distance)),
  fetchLikes: (from_id) => dispatch(fetchLikes(from_id)),
  fetchQuestions: () => dispatch(fetchQuestions()),
  createLike: (like) => dispatch(createLike(like)),
  destroyLike: (like_id) => dispatch(destroyLike(like_id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Matches);
