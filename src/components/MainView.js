/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import GeneralDataView from './GeneralDataView';

class MainView extends Component {

  render() {
    const { profileStats } = this.props;
    console.log(profileStats)
    return (
      <GeneralDataView profileStats={profileStats} />
    );
  }
}

const mapStateToProps = state => ({
  profileStats: state.userData.profileStats,
});

export default connect(
  mapStateToProps,
)(MainView);
