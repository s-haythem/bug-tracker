import {ADD_PROJECT, GET_ALL_PROJECTS, UPDATE_PROJECT, DELETE_PROJECT, AFFECT_PROJECT, GET_AFFECTED_PROJECT} from "../action-types/project-action-types"

const initialState={
    isAuth:false,
    project:[]
}

export const  projectReducer=(state=initialState,action)=> {
    switch(action.type) {
        case GET_ALL_PROJECTS:
        return {
            ...state,
            isAuth : true,
            project : action.payload
        }
        case ADD_PROJECT :
        return {
            ...state,
            isAuth :true,
            project : action.payload
        }
        case UPDATE_PROJECT : 
        return {
            ...state,
            isAuth : true,
            project : action.payload
        }
        case DELETE_PROJECT : 
        return {
            ...state,
            isAuth : true,
            project : action.payload
        }
        case AFFECT_PROJECT: 
        return {
            ...state,
            isAuth : true,
            project : action.payload
        }
        case GET_AFFECTED_PROJECT :
        return {
            ...state,
            isAuth : true,
            project : action.payload
        }
        default:return state
    }
}