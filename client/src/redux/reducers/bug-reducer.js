import {ADD_BUG, GET_ALL_BUGS, UPDATE_BUG, DELETE_BUG, AFFECT_BUG, GET_AFFECTED_BUG} from "../action-types/bug-action-types"

const initialState={
    isAuth:false,
    bug:[]
}

export const  bugReducer=(state=initialState,action)=> {
    switch(action.type) {
        case GET_ALL_BUGS:
        return {
            ...state,
            isAuth : true,
            bug : action.payload
        }
        case ADD_BUG :
        return {
            ...state,
            isAuth :true,
            bug : action.payload
        }
        case UPDATE_BUG : 
        return {
            ...state,
            isAuth : true,
            bug : action.payload
        }
        case DELETE_BUG : 
        return {
            ...state,
            isAuth : true,
            bug : action.payload
        }
        case AFFECT_BUG: 
        return {
            ...state,
            isAuth : true,
            bug : action.payload
        }
        case GET_AFFECTED_BUG :
        return {
            ...state,
            isAuth : true,
            bug : action.payload
        }
        default:return state
    }
}