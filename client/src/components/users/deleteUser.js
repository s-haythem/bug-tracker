import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../redux/action/auth-action";
import { Link } from "react-router-dom";
import "./deleteUser.css"

const DeleteUserHandler = ({user}) => {
    const dispatch = useDispatch()
    const removeUser = (e) => {
        e.preventDefault()
        dispatch(deleteUser(user._id))
        
    }

    return (
        <div>
            <button type="submit" className="button-delete" onClick={removeUser}><Link to="/">delete</Link></button>
        </div>
    )
}


export default DeleteUserHandler