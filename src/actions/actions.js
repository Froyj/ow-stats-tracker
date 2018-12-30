import {
  GET_BATTLE_TAG,
  GET_PROFILE_STATS,
  GET_COMPLETE_STATS,
} from '../constants/action-types';

const axios = require('axios');

export const getBattleTag = battleTag => ({ type: GET_BATTLE_TAG, battleTag });

export const getProfileStats = battleTag => (dispatch) => {
  axios.get(`https://ow-api.com/v1/stats/pc/eu/${battleTag}/profile`)
    .then(res => res.data)
    .then(profileStats => dispatch({
      type: GET_PROFILE_STATS,
      profileStats,
    }))
    .catch(err => console.log(err));
};

export const getCompleteStats = battleTag => (dispatch) => {
  axios.get(`https://ow-api.com/v1/stats/pc/eu/${battleTag}/complete`)
    .then(res => res.data)
    .then(completeStats => dispatch({
      type: GET_COMPLETE_STATS,
      completeStats,
    }))
    .catch(err => console.log(err));
};
