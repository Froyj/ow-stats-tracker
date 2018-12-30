import { GET_BATTLE_TAG, GET_PROFILE_STATS, GET_COMPLETE_STATS } from '../constants/action-types';

const initialState = {
  battleTag: 'Kayrn-2270',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BATTLE_TAG:
      return {
        ...state,
        battleTag: action.battleTag,
      };

    case GET_PROFILE_STATS:
      return {
        ...state,
        profileStats: action.profileStats,
      };

    case GET_COMPLETE_STATS:
      return {
        ...state,
        completeStats: action.completeStats,
      };

    default:
      return state;
  }
};
