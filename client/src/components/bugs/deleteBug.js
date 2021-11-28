import React from "react";
import { useDispatch } from "react-redux";
import { deleteBugHandler } from "../../redux/action/bug_actions";
import "./deleteBug.css"

const DeleteBug = ({bug}) => {

    const dispatch = useDispatch()
    const RemoveBug = (e) => {
        e.preventDefault()
        dispatch(deleteBugHandler(bug._id))
    }

    return (
        <div>
            <button type="submit" className="button-delete" onClick={RemoveBug}>delete</button>
        </div>
    )
}


export default DeleteBug