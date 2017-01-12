import React from 'react';
import { connect } from 'react-redux';
import LogInModal from './log_in_modal';
import { login, clearErrors } from '../../actions/session_actions';
import { receiveModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors,
  modal: state.modal,
});

const mapDispatchToProps = (dispatch) => ({
  login: user => dispatch(login(user)),
  setModal: modal => dispatch(receiveModal(modal)),
  clearErrors: errors => dispatch(clearErrors(errors))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogInModal);
