import React from 'react';
import { connect } from 'react-redux';
import Tabs from './tabs';

const mapStateToProps = (state) => ({
  currentProfile: state.currentProfile,
});

export default connect(
  mapStateToProps
)(Tabs);
