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
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IlUyRnNkR1ZrWDE5ZlpyRzF6VHNneXpHY09YQU11SXN0TzZiVGg2RGp0cEVYWnlLOCtWbSt6bVViUE5wVG04RW8vdm5PMGltNnczcGZXOTludW9TMTVnPT0iLCJpYXQiOjE1NzQwNTM1MDksImV4cCI6MTU3NDEzOTkwOX0.-vFyqzHHbNUx1jmlNCWQEu5vrnTC1j0fwtCs5LDpwqc'
      }
    };

    const res = await axios.get(
      'http://localhost:5000/api/tournaments/usertournament',
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
