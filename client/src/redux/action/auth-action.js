import axios from "axios";
import {
  DELETE_USER,
  ERROR_USER,
  GET_ALL_USERS,
  GET_USER,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
  UPDATE_USER,
} from "../action-types/auth-action-types";

export const registerHandler = (newUser) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/register",
      newUser
    );
    dispatch({
      type: REGISTER_USER,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_USER,
    });
  }
};

export const loginHandler = (authUser, history) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      authUser
    );
    dispatch({
      type: LOGIN_USER,
      payload: res.data,
    });
  } catch (error) {
    console.dir(error);
    const msg = error.response.data.msg;

    if (msg) {
      alert(msg);
    }

    dispatch({
      type: ERROR_USER,
    });
    history.push("/");
  }
};

export const logoutHandler = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGOUT_USER,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getAuthUser = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    };
    const res = await axios.get("http://localhost:5000/api/auth/user", config);
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getAuthAllUser = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    };
    const res = await axios.get("http://localhost:5000/api/auth/all", config);
    dispatch({
      type: GET_ALL_USERS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const deleteUser = (user_id) => async (dispatch) => {
  try {
    const res = await axios.delete(`http://localhost:5000/api/auth/delete/${user_id}`)
    dispatch({
      type : DELETE_USER,
      payload : res.data
    })
  } catch (error) {
    console.log(error);
  }
}


export const updateUser =(user_id,updatedUser)=>async(dispatch)=>{
  await
  axios.put(`http://localhost:5000/api/auth/edit/${user_id}`,updatedUser)
  .then((res)=>dispatch(getAuthUser()))
  .catch((error)=>console.log(error))
}
