import {
  GET_SEASONS,
  SET_CURRENT_SEASON,
  SET_LOADING,
  LOGS_ERROR,
  ADD_SEASON,
  UPDATE_SEASON
} from '../actions/types';

const initialState = {
  currentSeason: null,
  seasons: null,
  loading: false,
  error: null
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case LOGS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case GET_SEASONS:
      return {
        ...state,
        seasons: action.payload,
        loading: false
      };
    case SET_CURRENT_SEASON:
      return {
        ...state,
        currentSeason: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
