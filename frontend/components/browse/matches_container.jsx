import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
import { fetchLikes, createLike, destroyLike } from '../../actions/like_actions';
import { fetchQuestions } from '../../actions/question_actions';
import Matches from './matches';


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  users: state.users.users,
  questions: state.questions.questions,
  likes: state.likes.likes
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: (distance) => dispatch(fetchUsers(distance)),
  fetchQuestions: () => dispatch(fetchQuestions()),
  fetchLikes: (from_id) => dispatch(fetchLikes(from_id)),
  createLike: (like) => dispatch(createLike(like)),
  destroyLike: (like_id) => dispatch(destroyLike(like_id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Matches);
