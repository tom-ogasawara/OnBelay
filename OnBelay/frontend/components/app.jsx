import React from 'react';
import NavBarContainer from './greeting/nav_bar_container';
import LogInModalContainer from './auth/log_in_modal_container';
import { connect } from 'react-redux';

const App = ({children, modal}) => {
  const modalEl = modal ? <LogInModalContainer /> : null;

  return (
    <div>
      <NavBarContainer />
      { children }
      { modalEl }
    </div>
  );
};

const mapStateToProps = (state) => ({
  modal: state.modal,
});

export default connect(
  mapStateToProps
)(App);
