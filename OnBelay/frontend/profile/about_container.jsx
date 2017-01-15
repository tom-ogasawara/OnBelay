import { connect } from 'react-redux';
import { fetchCurrentProfile, updateProfile } from '../../actions/profile_actions';
import About from './about';


const mapStateToProps = (state) => ({
  profile: state.currentProfile.currentProfile,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchCurrentProfile: (user_id) => dispatch(fetchCurrentProfile(user_id)),
  updateProfile: (user) => dispatch(updateProfile(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
