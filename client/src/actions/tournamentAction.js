import { GET_TOURNAMENTS, SET_LOADING, LOGS_ERROR } from './types';
import axios from 'axios';

// Get techs
export const getTournaments = () => async dispatch => {
  try {
    setLoading();
    let config = {
      headers: {
        'auth-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IlUyRnNkR1ZrWDE4NVI0L3lSSGNjTERzcU9IN2hpUkRTb01tRXY2Z1FQS3RnQ2x1T0Q4ek9OOXYxUWJwVFA2c1lxaUdTMFJuTmJoSWpNYlhHbXl5RmZRPT0iLCJpYXQiOjE1NzExMTYwMTAsImV4cCI6MTU3MTIwMjQxMH0.GfyxaD8t3m55PKn4pAfN6bOSA4DR607y2v6kfQ7k3HE'
      }
    };

    const res = await axios.get(
      'http://localhost:5000/api/tournaments',
      config
    );

    const data = res.data;
    console.log(data);
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

export const setLoading = () => dispatch => {
  dispatch({
    type: SET_LOADING
  });
};
