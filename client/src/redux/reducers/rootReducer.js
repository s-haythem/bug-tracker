import { combineReducers } from "redux";
import { authReducer } from "./auth-reducer";
import { bugReducer } from "./bug-reducer";
import { projectReducer } from "./project-reducer";
export const rootReducer=combineReducers({
    auth:authReducer,
    bug : bugReducer,
    project : projectReducer
})