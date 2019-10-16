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
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IlUyRnNkR1ZrWDE5Y3BwVWVTTkcxNlFncklhRWhvbFFKNDNWSjM0ampMd01UUUg5dmM4ZDNOZmVWdSt1KzRjQjZLWVB1a21TTjV2cjVrVDEyQkk4d1JBPT0iLCJpYXQiOjE1NzEyMDI3MjAsImV4cCI6MTU3MTI4OTEyMH0.Ygoeh3J4Rppw-ErUNa2xlz9UpErz1148mdJYmqtvsPk'
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
