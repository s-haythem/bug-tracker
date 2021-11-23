import React from "react";
import { useSelector } from "react-redux";
import User from "./user";



const GetAllUsers = () => {
    const users = useSelector(state => state.auth.allUsers)
    return (
        <div className="user-list">
            {users.map((el) => < User  user={el}/>)}
        </div>
    )
}

export default GetAllUsers