import { combineReducers } from 'redux';
import tournamentReducer from './tournamentReducer';
import seasonReducer from './seasonReducer';
import authReducer from './authReducer';

export default combineReducers({
  tournament: tournamentReducer,
  season: seasonReducer,
  auth: authReducer
});
