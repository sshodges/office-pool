import {
  GET_TOURNAMENTS,
  SET_LOADING,
  LOGS_ERROR,
  SET_CURRENT_TOURNAMENT,
  ADD_TOURNAMENT
} from "./types";
import axios from "axios";

// Get techs
export const getTournaments = () => async dispatch => {
  try {
    setLoading();
    let config = {
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IlUyRnNkR1ZrWDE5VS9CQ2l4QjRidmlmeGljcFhlZWgzc1NYb09QblV6ZmJQM3E2TmxzYzhuazlUUmNGdENrS3QrQVUwMS83OEREWjZFWldpY1hEelFnPT0iLCJpYXQiOjE1NzQyMTI1NDYsImV4cCI6MTU3NDI5ODk0Nn0.HV_X5C-tLg1MKU9o9p4M5hXbgHDFY9El7j7V9WQ0378"
      }
    };

    const res = await axios.get(
      "http://localhost:5000/api/tournaments/usertournament",
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

export const addTournament = tournament => async dispatch => {
  setLoading();

  const body = {
    tournamentName: tournament.tournamentName,
    tournamentType: tournament.tournamentType,
    user: "5d8ad4d177c2385754673a87"
  };

  let config = {
    headers: {
      "auth-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IlUyRnNkR1ZrWDE5VS9CQ2l4QjRidmlmeGljcFhlZWgzc1NYb09QblV6ZmJQM3E2TmxzYzhuazlUUmNGdENrS3QrQVUwMS83OEREWjZFWldpY1hEelFnPT0iLCJpYXQiOjE1NzQyMTI1NDYsImV4cCI6MTU3NDI5ODk0Nn0.HV_X5C-tLg1MKU9o9p4M5hXbgHDFY9El7j7V9WQ0378"
    }
  };

  const res = await axios.post(
    "http://localhost:5000/api/tournaments/",
    body,
    config
  );

  const data = res.data;
  dispatch({
    type: ADD_TOURNAMENT,
    payload: data
  });
};

export const setLoading = () => dispatch => {
  dispatch({
    type: SET_LOADING
  });
};
