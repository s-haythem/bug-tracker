import React from "react";
import { useDispatch } from "react-redux";
import { deleteProjectHandler } from "../../redux/action/project-action";

const DeleteProject = ({project}) => {

    const dispatch = useDispatch()
    const RemoveProject = (e) => {
        e.preventDefault()
        dispatch(deleteProjectHandler(project._id))
    }

    return (
        <div>
            <button type="button" className="submit" onClick={RemoveProject}>delete</button>
        </div>
    )
}


export default DeleteProject