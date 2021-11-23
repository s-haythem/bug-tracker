import { DELETE_USER, ERROR_USER, GET_ALL_USERS, GET_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER, UPDATE_USER } from "../action-types/auth-action-types"

const initialState={
    token:localStorage.getItem('token'),
    isAuth:false,
    allUsers : [],
    user:null
}

export const  authReducer=(state=initialState,action)=>{
switch (action.type) {
case LOGIN_USER:
case REGISTER_USER: localStorage.setItem('token', action.payload.token )
return{
    ...state,
    isAuth:true,
    ...action.payload
}
case ERROR_USER:
case LOGOUT_USER: localStorage.removeItem('token')
return{
    ...state,
    token:null,
    isAuth:false,
    user:null
}
case GET_USER:return{
    ...state,
    isAuth:true,
    user:action.payload
   
}
case GET_ALL_USERS:return{
    ...state,
    isAuth:true,
    allUsers:action.payload
   
}
case DELETE_USER:return{
    ...state,
    isAuth:true,
    user:action.payload
   
}
case UPDATE_USER:return{
    ...state,
    isAuth:true,
    user:action.payload
   
}

    default:return state      
}
}