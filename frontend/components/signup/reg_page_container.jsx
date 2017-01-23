import React from 'react';
import { connect } from 'react-redux';
import RegPage from './reg_page';
import { receiveModal } from '../../actions/modal_actions';
import { login } from '../../actions/session_actions';

const mapDispatchToProps = (dispatch) => ({
  setModal: modal => dispatch(receiveModal(modal)),
  login: user => dispatch(login(user)),
});

export default connect(
  null,
  mapDispatchToProps
)(RegPage);
