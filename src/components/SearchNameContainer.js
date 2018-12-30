/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBattleTag, getProfileStats, getCompleteStats } from '../actions/actions';
import SearchName from './SearchName';


class SearchNameContainer extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { getBattleTag } = this.props;
    getBattleTag(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { battleTag, getProfileStats, getCompleteStats } = this.props;
    getProfileStats(battleTag);
    getCompleteStats(battleTag);
  }

  render() {
    const { battleTag } = this.props;

    return (
      <SearchName
        battleTag={battleTag}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = state => ({
  battleTag: state.userData.battleTag,
});

const mapDispatchToProps = dispatch => ({
  getBattleTag: battleTag => dispatch(getBattleTag(battleTag)),
  getProfileStats: battleTag => dispatch(getProfileStats(battleTag)),
  getCompleteStats: battleTag => dispatch(getCompleteStats(battleTag)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchNameContainer);
