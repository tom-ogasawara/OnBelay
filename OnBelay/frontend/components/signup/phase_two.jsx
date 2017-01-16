import React from 'react';

const PhaseTwo = (props) => (
  <form onSubmit={props.submit}>

    <label className="phase-two-label">Email</label>
    <input type="text"
      value={props.email}
      onChange={props.update("email")}
      placeholder="Email"
      className="phase-two-box"/>


    <label className="phase-two-label">Age</label>
    <input type="text"
      value={props.age}
      onChange={props.update("age")}
      placeholder="Age"
      className="phase-two-box"/>
    <p className="reg-errors">{props.age_errors}</p>

    <label className="phase-two-label">Zip Code</label>
    <input type="text"
      value={props.location}
      onChange={props.update("location")}
      placeholder="e.g. 95472"
      className="phase-two-box"/>
    <p className="reg-errors">{props.zip_errors}</p><br></br>

    <input type="submit" value="Next" className="next-button" />
  </form>
);

export default PhaseTwo;
