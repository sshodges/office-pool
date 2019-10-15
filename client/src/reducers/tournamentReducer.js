import {
  GET_TOURNAMENTS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_TOURNAMENT,
  UPDATE_TOURNAMENT,
  DELETE_TOURNAMENT,
  GET_TOURNAMENTS_BY_USER
} from '../actions/types';

const initialState = {
  tournaments: null,
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
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };
    case GET_TOURNAMENTS:
      return {
        ...state,
        tournaments: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
