import React from 'react';
import { Link, withRouter } from 'react-router';
import PhaseOne from './phase_one';
import PhaseTwo from './phase_two';
import SignUpFormContainer from './sign_up_form_container';


class InitialRegistration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      regStage: 0,
      email: "",
      discipline: "climb",
      indoorsoutdoors: "outdoors",
      age: "",
      location: "",
      errors: false,
      age_errors: "",
      zip_errors: "",
    };

    this.update = this.update.bind(this);
    this.handleFirstStage = this.handleFirstStage.bind(this);
    this.handleSecondStage = this.handleSecondStage.bind(this);
    this.checkForErrors = this.checkForErrors.bind(this);
    this.checkToMoveOn = this.checkToMoveOn.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleFirstStage(e) {
    e.preventDefault();

    this.setState({
      discipline: this.state.discipline,
      indoorsoutdoors: this.state.indoorsoutdoors,
      regStage: 1
    });
  }

  checkForErrors(cb) {
    const currentErrors = {};

    if (isNaN(this.state.age) || this.state.age < 12 || this.state.age > 120) {
      currentErrors.age_errors = "Please enter a valid age.";
      currentErrors.errors = true;
    }
    if (isNaN(this.state.location) || this.state.location.length !== 5) {
      currentErrors.zip_errors = "Please enter a valid zip code.";
      currentErrors.errors = true;
    }

    if (Object.keys(currentErrors).length === 0) {
      currentErrors.errors = false;
      currentErrors.age_errors = "";
      currentErrors.zip_errors = "";
    }

    this.setState(currentErrors, cb);
  }

  checkToMoveOn() {
    if (this.state.errors) {

    } else {
      this.setState({
        email: this.state.email,
        age: this.state.age,
        location: this.state.location,
        age_errors: "",
        zip_errors: "",
        errors: false,
        regStage: 2,
      });
    }
  }

  handleSecondStage(e) {
    e.preventDefault();

    this.checkForErrors(this.checkToMoveOn);
  }

  render() {


    let currentForm;

    if (this.state.regStage === 0) {
      currentForm = (
        <PhaseOne
          submit={ this.handleFirstStage }
          update={ this.update }
          discipline={ this.state.discipline }
          indoorsoutdoors={ this.state.indoorsoutdoors } />
      );
    } else if (this.state.regStage === 1) {
      currentForm = (
        <PhaseTwo
          submit={ this.handleSecondStage }
          update={ this.update }
          email={ this.state.email }
          age={ this.state.age }
          location={ this.state.location }
          age_errors={ this.state.age_errors }
          zip_errors={ this.state.zip_errors }/>
      );
    } else if (this.state.regStage === 2) {

      const regInfo = {
        discipline: this.state.discipline,
        indoorsoutdoors: this.state.indoorsoutdoors,
        email: this.state.email,
        age: this.state.age,
        location: this.state.location
      };

      currentForm = (
        <SignUpFormContainer regInfo={ regInfo } />
      );
    }

    return (
      <div className="form-container">
        {currentForm}
      </div>
    );
  }
}

export default withRouter(InitialRegistration);
