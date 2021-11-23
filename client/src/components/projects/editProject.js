import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { updateProjectHandler } from "../../redux/action/project-action";
import { Modal } from "react-bootstrap";


const EditProjects = ({project}) => {
    const [show, setShow] = useState(false);
    const [title,setTitle] = useState("")
    const [description,setDescription]= useState("")
    const [deliveryTime,setDeliveryTime] = useState("")
    const dispatch = useDispatch()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const EditProject = (e) => {
        e.preventDefault()
        const editedProject= {title, description, deliveryTime}
        dispatch(updateProjectHandler(project._id,editedProject))
        handleClose();
    }
    return (
        <div>
            <button className="btn-edit" onClick={handleShow}>
                    Edit
             </button>
             <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <label>
                <span>Title</span>
                <input type="text" onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label>
                <span>Description</span>
                <input type="text" onChange={(e) => setDescription(e.target.value)} />
            </label>
            <label>
                <span>deliveryTime</span>
                <input type="text" onChange={(e) => setDeliveryTime(e.target.value)} />
            </label>
            <button type="button" className="submit" onClick={EditProject}>edit project</button>
            </Modal.Body>
      </Modal>
        </div>
    )
}

export default EditProjects