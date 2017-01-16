import React from 'react';
import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import InitialRegistration from './initial_reg';

const mapStateToProps = (state) => ({
  loggedIn: !!state.session.currentUser,
  errors: state.session.errors,
});

const mapDispatchToProps = (dispatch) => ({
  signup: user => dispatch(signup(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InitialRegistration);
