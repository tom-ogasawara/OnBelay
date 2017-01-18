import React from 'react';
import InitialRegistrationContainer from './initial_reg_container';
import { withRouter } from 'react-router';


class RegPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.props.setModal(true);
  }

  handleGuest(e) {
    e.preventDefault();

    this.props.login({ username: "chrissharma", password: "password" })
      .then((user) => {
        this.props.router.push('/');
      });
  }

  render() {
    return (
      <div>
        <div className="background group">
          <div className="splash-top group">
            <div className="login-header">
              { "Already a member?" }
              <button className="login-button" onClick={ this.handleClick } >
                Sign In
              </button>
              <button className="demo-button" onClick={ this.handleGuest } >
                Demo Login
              </button>
            </div>
            <h1 className="logo">onBelay</h1>
          </div>
          <div className="splash-bottom">
            <div className="splash-blurb">
              Find a climbing partner anywhere on Earth.
            </div>
            <InitialRegistrationContainer />
          </div>
        </div>
        <footer className="footer group">
          <p className="footer-copy-styling">
            {"© onBelay 2017"}
          </p>
        </footer>
      </div>
    );
  }
}

export default withRouter(RegPage);
