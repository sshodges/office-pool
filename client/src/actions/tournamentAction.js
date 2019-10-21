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
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IlUyRnNkR1ZrWDE5YWhSd0VtNnI0dkpwS3RUcTdPMmphdHZEcDc1S3FQVklyMkgyQ3libHFES2hxYjlzc0s4L0ZnZ1BBZHQzRFdxbmJ2emJmUWxHV3pBPT0iLCJpYXQiOjE1NzE2MjEzNjgsImV4cCI6MTU3MTcwNzc2OH0.k0HBGlKncEeBU1s6UR9cP8ZiwOf2UMPuHkvLJvKJvXk'
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
