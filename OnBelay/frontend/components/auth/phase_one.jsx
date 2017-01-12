import React from 'react';

const PhaseOne = (props) => (
  <form onSubmit={props.submit} className="form-one">
    <span className="prefix">
      I like to
    </span>
    <select
      onChange={props.update("discipline")}
      value={props.discipline}
      className="phase-one-button-container">
      <option value="boulder">Boulder</option>
      <option value="topRope">Top Rope</option>
      <option value="lead">Lead</option>
      <option value="climb">Climb</option>
    </select>

    <select
      onChange={props.update("indoorsoutdoors")}
      value={props.indoorsoutdoors}
      className="phase-one-button-container">
      <option value="outdoors">Outdoors</option>
      <option value="indoors">Indoors</option>
      <option value="everywhere">Everywhere</option>
    </select>

    <input type="submit" value="Continue" className="continue-button" />
  </form>
);

export default PhaseOne;
