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
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IlUyRnNkR1ZrWDE5ZlpyRzF6VHNneXpHY09YQU11SXN0TzZiVGg2RGp0cEVYWnlLOCtWbSt6bVViUE5wVG04RW8vdm5PMGltNnczcGZXOTludW9TMTVnPT0iLCJpYXQiOjE1NzQwNTM1MDksImV4cCI6MTU3NDEzOTkwOX0.-vFyqzHHbNUx1jmlNCWQEu5vrnTC1j0fwtCs5LDpwqc'
      }
    };

    const res = await axios.get(
      `http://localhost:5000/api/seasons/tournamentId/${tournamentId}`,
      config
    );

    const data = res.data;
    const currentSeason = data.filter(
      season => season.currentSeason === true
    )[0];

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
