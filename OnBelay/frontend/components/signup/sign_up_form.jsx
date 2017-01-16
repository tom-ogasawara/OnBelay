import React from 'react';
import { Link, withRouter } from 'react-router';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.displayUsername = this.displayUsername.bind(this);
    this.displayPassword = this.displayPassword.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.regInfo.age = parseInt(this.props.regInfo.age);
    const user = Object.assign(Object.assign({}, this.state), this.props.regInfo);

    this.props.signup(user)
      .then((user) => {
        this.setState({ username: "", password: "" });
        this.props.router.push(`/profile/${user.currentUser.id}`);
      });
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  displayUsername() {
    if (this.props.errors.username) {
      return "Username";
    }
  }

  displayPassword() {
    if (this.props.errors.password) {
      return "Password";
    }
  }

  render () {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label className="final-form-label">Username</label>
        <input type="text"
          value={this.state.username}
          onChange={this.update("username")}
          placeholder="Username"
          className="phase-two-box"/><br></br>
        <p className="reg-errors">{this.displayUsername()} {this.props.errors.username}</p>

        <label className="final-form-label">Password</label>
        <input type="password"
          value={this.state.password}
          onChange={this.update("password")}
          placeholder="Password"
          className="phase-two-box"/><br></br>
        <p className="reg-errors">{this.displayPassword()} {this.props.errors.password}</p>


        <input type="submit" value="Done!" className="done-button" />
      </form>
    );
  }
}


export default withRouter(SignUpForm);
