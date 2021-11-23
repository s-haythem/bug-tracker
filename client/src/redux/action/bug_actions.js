import axios from "axios";
import {ADD_BUG, GET_ALL_BUGS, UPDATE_BUG, DELETE_BUG, AFFECT_BUG, GET_AFFECTED_BUG} from "../action-types/bug-action-types"

export const getAllBugsHandler = () => async (dispatch) => {
    try {
      const config = {
        headers: {
          "auth-token": localStorage.getItem("token"),
        },
      };
      const res = await axios.get("http://localhost:5000/api/bugs", config);
      dispatch({
        type: GET_ALL_BUGS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };


  export const addBugHandler =(newBug)=>async(dispatch)=>{
    await
    axios.post(`http://localhost:5000/api/bugs/add`,newBug)
    .then((res)=>dispatch(getAllBugsHandler()))
    .catch((error)=>console.log(error))
}


  export const updateBugHandler =(bug_id,editedBug)=>async(dispatch)=>{
    await
    axios.put(`http://localhost:5000/api/bugs/update/${bug_id}`,editedBug)
    .then((res)=>dispatch(getAllBugsHandler()))
    .catch((error)=>console.log(error))
}
  

  export const deleteBugHandler =(bug_id)=>async(dispatch)=>{
    await
    axios.delete(`http://localhost:5000/api/bugs/delete/${bug_id}`)
    .then((res)=>dispatch(getAllBugsHandler()))
    .catch((error)=>console.log(error))
}

  export const affectBugHandler = (bug_id, user_id) => async (dispatch) => {
    try {
      const config = {bug_id,user_id}  
      const res = await axios.put("http://localhost:5000/api/bugs/affect", config)
      dispatch({
        type : AFFECT_BUG,
        payload : res.data
      })
    } catch (error) {
      console.log(error);
    }
  }

  export const getAffectedBugHandler = (bug_id) => async (dispatch) => {
    try {
        
      const res = await axios.get("http://localhost:5000/api/bugs/affect/:_id", bug_id)
      dispatch({
        type : GET_AFFECTED_BUG,
        payload : res.data
      })
    } catch (error) {
      console.log(error);
    }
  }
