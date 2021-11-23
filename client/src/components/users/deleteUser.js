import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../redux/action/auth-action";

const DeleteUserHandler = ({user}) => {
console.log(user);
    const dispatch = useDispatch()
    const removeUser = (e) => {
        e.preventDefault()
        dispatch(deleteUser(user._id))
    }

    return (
        <div>
            <button type="button" className="submit" onClick={removeUser}>delete</button>
        </div>
    )
}


export default DeleteUserHandler