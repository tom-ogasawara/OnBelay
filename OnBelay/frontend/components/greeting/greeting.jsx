import React from 'react';
import { Link, withRouter } from 'react-router';


class Greeting extends React.Component {
  constructor() {
    super();

    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut(e) {
    e.preventDefault();

    this.props.logout().then(() => this.props.router.push("/signup"));
  }

  render() {

    if (this.props.currentUser) {
      return(
        <div>
          <h2>Welcome, {this.props.currentUser.username}!</h2>
          <form onSubmit={this.handleLogOut}>
            <input type="submit" value="Log Out" />
          </form>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default withRouter(Greeting);
