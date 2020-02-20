import {
  LOGIN_SUCCESS
} from "./types";
import axios from "axios";


export const login = (email, password) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
  
    const res = await axios.post(
      "http://localhost:5000/api/auth/",
      {email, password},
      config
    );
    console.log(res)
  
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.token
    });
  } catch (error){
    console.log(error)
  }
  

  //TODO set up axios default header
};

