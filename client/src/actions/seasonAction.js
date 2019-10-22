import {
  GET_SEASONS,
  SET_CURRENT_SEASON,
  SET_LOADING,
  LOGS_ERROR,
  ADD_SEASON,
  UPDATE_SEASON
} from './types';
import axios from 'axios';

// Get techs
export const getSeasons = tournamentId => async dispatch => {
  try {
    setLoading();
    let config = {
      headers: {
        'auth-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IlUyRnNkR1ZrWDErNkdNTTVLLzlOSERrZkZySy9DV3dBQ3BoZ3JmemZaTnBMWDVDckpaeHh6Ymh1Z3l1dFY0YTYrTzhOYm9qVlA2alFtNDU2cTQrbVhRPT0iLCJpYXQiOjE1NzE3MjA4MzksImV4cCI6MTU3MTgwNzIzOX0.wJCt0xauc-J6VWuminj8kaAadmH8Uz_G_76kEvWfOCg'
      }
    };

    const res = await axios.get(
      `http://localhost:5000/api/seasons/tournamentId/${tournamentId}`,
      config
    );

    const data = res.data;
    const currentSeason = data.filter(season => season.currentSeason === true);
    console.log(currentSeason);

    dispatch({
      type: GET_SEASONS,
      payload: data
    });

    dispatch({
      type: SET_CURRENT_SEASON,
      payload: currentSeason
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error
    });
  }
};

export const setCurrentSeason = season => dispatch => {
  setLoading();
  dispatch({
    type: SET_CURRENT_SEASON,
    payload: season
  });
};

export const setLoading = () => dispatch => {
  dispatch({
    type: SET_LOADING
  });
};
