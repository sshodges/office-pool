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
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IlUyRnNkR1ZrWDEvQW5wZ3p3U2Q5MzZhOVRpeFdJZ1QrSXNYL2VHcmd1ODdhMHFBU2lZZjdVUFBPcXFUTDBLcFc5OWtuVmd3T2YrekJoL0dXNnlUekFBPT0iLCJpYXQiOjE1NzQ4MzEyMTksImV4cCI6MTU3NDkxNzYxOX0.mRcqEtykeUbdkDDB0h9H-HlENmgF2fBP1TrudYAnTaQ"
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
    user: "5d8c36e3075e6907bc9ee8a0"
  };

  let config = {
    headers: {
      "auth-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IlUyRnNkR1ZrWDEvQW5wZ3p3U2Q5MzZhOVRpeFdJZ1QrSXNYL2VHcmd1ODdhMHFBU2lZZjdVUFBPcXFUTDBLcFc5OWtuVmd3T2YrekJoL0dXNnlUekFBPT0iLCJpYXQiOjE1NzQ4MzEyMTksImV4cCI6MTU3NDkxNzYxOX0.mRcqEtykeUbdkDDB0h9H-HlENmgF2fBP1TrudYAnTaQ"
    }
  };

  const res = await axios.post(
    "http://localhost:5000/api/tournaments/",
    body,
    config
  );

  const data = res.data.savedTournament;
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
