import {
  GET_TOURNAMENTS,
  SET_LOADING,
  LOGS_ERROR,
  SET_CURRENT_TOURNAMENT
} from './types';
import axios from 'axios';

// Get techs
export const getTournaments = () => async dispatch => {
  try {
    setLoading();
    let config = {
      headers: {
        'auth-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IlUyRnNkR1ZrWDE5SEFPN3dyZVRiQTYxUGlxaUpyYzJ6UTg2L1JnN1JzOXlkM1AwL1ZROFdiSkxyN3RDWjhuWjJMNS84T2pBL29Dc1dTUGxsYWZuZXd3PT0iLCJpYXQiOjE1NzI0MTIxNzQsImV4cCI6MTU3MjQ5ODU3NH0.2V4SygLgFoxonB-SaaPQ-S708mVgHxVvyw6opN97k4M'
      }
    };

    const res = await axios.get(
      'http://localhost:5000/api/tournaments',
      config
    );

    const data = res.data;

    dispatch({
      type: GET_TOURNAMENTS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error
    });
  }
};

export const setCurrentTournament = tournament => dispatch => {
  setLoading();
  dispatch({
    type: SET_CURRENT_TOURNAMENT,
    payload: tournament
  });
};

export const setLoading = () => dispatch => {
  dispatch({
    type: SET_LOADING
  });
};
