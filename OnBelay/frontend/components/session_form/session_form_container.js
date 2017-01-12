import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);

// import React from 'react';
// import { Link, hashHistory } from 'react-router';
//
// class AuthForm extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       username: "",
//       password: "",
//       role: "developer",
//       looking_for: "developer"
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleGuest = this.handleGuest.bind(this);
//   }
//
//   componentDidUpdate(){
//     this.redirectIfSignedIn();
//   }
//
//   redirectIfSignedIn(){
//     if (this.props.signedIn){
//       hashHistory.push("/browse");
//     }
//   }
//
//   update(field){
//     return e => { this.setState({[field]: e.currentTarget.value }); };
//   }
//
//   handleSubmit(e){
//     e.preventDefault();
//     const user = this.state;
//     this.props.processForm({user});
//   }
//
//
//   navLink(){
//     if (this.props.formType === "signin") {
//       return <Link to="/signup">sign up instead</Link>;
//     } else {
//       return <Link to="/signin">sign in instead</Link>;
//     }
//   }
//
//   guestSigninButton(){
//     return (
//       <input type="submit" value="Guest" className="submit-btn"
//       onClick={this.handleGuest}/>
//     );
//   }
//
//   handleGuest(e){
//     e.preventDefault();
//     this.state = {
//       username: "AdaLovelace",
//       password: "password",
//     };
//     let user = this.state;
//     this.props.guestSignin({user});
//   }
//
//   renderSignupInputs(){
//     return (
//       <div>
//       <label> Email:
//       <input type="text"
//       value={this.state.email}
//       onChange={this.update("email")}/>
//       </label>
//       <div>
//       <label> I am a
//       <select id="role" value={this.state.role} onChange={this.update("role")} defaultValue="developer">
//       <option value="developer">Developer</option>
//       <option value="designer" >Designer</option>
//       <option value="sales" >Salesperson</option>
//       <option value="recruiter" >Recruiter</option>
//       <option value="business" >Business person</option>
//       </select>
//       </label>
//       <label> Looking to meet
//       <select id="role" value={this.state.looking_for} onChange={this.update("looking_for")} defaultValue="developer">
//       <option value="developer">Developers</option>
//       <option value="designer" >Designers</option>
//       <option value="sales" >Salespeople</option>
//       <option value="recruiter" >Recruiters</option>
//       <option value="business" >Business People</option>
//       </select>
//       </label>
//       <label> near:
//       <input type="text"
//       value={this.state.zip_code}
//       placeholder="zipcode ex: 94107"
//       onChange={this.update("zip_code")}/>
//       </label>
//       </div>
//       </div>
//     );
//   }
//
// renderErrors(){
// return(
// <ul>
// {this.props.errors.map( (error, i) => (
// <li key={`error-${i}`}>
// {error}
// </li>
// ))}
// </ul>
// );
// }
//
// render() {
// return (
// <div className="signin-form-container" >
// <form onSubmit={this.handleSubmit} className="signin-form-box">
// <br/>
// Please { this.props.formType } or { this.navLink() }
// { this.renderErrors() }
// <div className="signin-form">
// <br />
// <label> Username:
// <input type="text"
// value={this.state.username}
// onChange={this.update("username")}
// className="signin-input" />
// </label>
//
// <br />
// <label> Password:
// <input type="password"
// value={this.state.password}
// onChange={this.update("password")}
// className="signin-input" />
// </label>
// {this.props.formType === "signup" ? this.renderSignupInputs() : null}
//
// <br />
// <input type="submit" value="Submit" className="submit-btn"/>
// {this.guestSigninButton()}
//
// </div>
// </form>
// </div>
//
// );
// }
//
// }
//
// export default AuthForm;
