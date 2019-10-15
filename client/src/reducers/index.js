import { combineReducers } from 'redux';
import tournamentReducer from './tournamentReducer';
// import seasonReducer from './seasonReducer';
// import matchReducer from './matchReducer';
// import userReducer from './userReducer';

export default combineReducers({
  tournament: tournamentReducer
  // season: seasonReducer,
  // match: matchReducer,
  // user: userReducer,
});
