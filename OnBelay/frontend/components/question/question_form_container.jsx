import { connect } from 'react-redux';
import { createResponse } from '../../actions/response_actions';
import QuestionForm from './question_form';


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  responses: state.responses.responses
});

const mapDispatchToProps = dispatch => ({
  createResponse: (response) => dispatch(createResponse(response)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionForm);
