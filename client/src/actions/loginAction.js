import {
  GET_TOURNAMENTS,
  SET_LOADING,
  LOGS_ERROR,
  SET_CURRENT_TOURNAMENT,
  ADD_TOURNAMENT
} from "./types";
import axios from "axios";


export const login = user => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const res = await axios.post(
    "http://localhost:5000/api/auth/",
    user,
    config
  );

  dispatch({
    type: LOGIN_SUCCESS,
    payload: res.data.token
  });

  //TODO set up axios default header
};

