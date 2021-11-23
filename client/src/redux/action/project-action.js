import axios from "axios";
import {ADD_PROJECT, GET_ALL_PROJECTS, UPDATE_PROJECT, DELETE_PROJECT, AFFECT_PROJECT, GET_AFFECTED_PROJECT} from "../action-types/project-action-types"

export const getAllProjectHandler = () => async (dispatch) => {
    try {
      const config = {
        headers: {
          "auth-token": localStorage.getItem("token"),
        },
      };
      const res = await axios.get("http://localhost:5000/api/projects", config);
      dispatch({
        type: GET_ALL_PROJECTS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };


  export const addProjectHandler =(newProject)=>async(dispatch)=>{
    await
    axios.post(`http://localhost:5000/api/projects/add`,newProject)
    .then((res)=>dispatch(getAllProjectHandler()))
    .catch((error)=>console.log(error))
}


  export const updateProjectHandler =(project_id,updatedProject)=>async(dispatch)=>{
    await
    axios.post(`http://localhost:5000/api/projects/update/${project_id}`, updatedProject)
    .then((res)=>dispatch(getAllProjectHandler()))
    .catch((error)=>console.log(error))
}

  export const deleteProjectHandler =(project_id)=>async(dispatch)=>{
    await
    axios.post(`http://localhost:5000/api/projects/update/${project_id}`)
    .then((res)=>dispatch(getAllProjectHandler()))
    .catch((error)=>console.log(error))
}

  export const affectProjectHandler = (project_id, user_id) => async (dispatch) => {
    try {
      const config = {project_id,user_id}  
      const res = await axios.put("http://localhost:5000/api/projects/affect", config)
      dispatch({
        type : AFFECT_PROJECT,
        payload : res.data
      })
    } catch (error) {
      console.log(error);
    }
  }

  export const getAffectedprojectHandler = (project_id) => async (dispatch) => {
    try {
        
      const res = await axios.get("http://localhost:5000/api/projects/affect/:_id", project_id)
      dispatch({
        type : GET_AFFECTED_PROJECT,
        payload : res.data
      })
    } catch (error) {
      console.log(error);
    }
  }
