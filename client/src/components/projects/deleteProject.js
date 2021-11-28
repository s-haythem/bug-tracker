import React from "react";
import { useDispatch } from "react-redux";
import { deleteProjectHandler } from "../../redux/action/project-action";
import "./deleteProject.css"

const DeleteProject = ({project}) => {

    const dispatch = useDispatch()
    const RemoveProject = (e) => {
        e.preventDefault()
        dispatch(deleteProjectHandler(project._id))
    }

    return (
        <div>
            <button type="submit" className="button-delete" onClick={RemoveProject}>delete</button>
        </div>
    )
}


export default DeleteProject