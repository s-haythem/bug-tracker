import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addProjectHandler } from "../../redux/action/project-action";
import { Modal, Button} from "react-bootstrap";

const AddProjects = () => {
    const [show, setShow] = useState(false);
    const [title,setTitle] = useState("")
    const [description,setDescription]= useState("")
    const [deliveryTime,setDeliveryTime] = useState("")
    const dispatch = useDispatch()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addNewProject = (e) => {
        e.preventDefault()
        const newProject = {title,description,deliveryTime}
        dispatch(addProjectHandler(newProject))
        handleClose();
    }
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                    Add project
             </Button>
             <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <label>
                <span>title</span>
                <input type="text" onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label>
                <span>Description</span>
                <input type="text" onChange={(e) => setDescription(e.target.value)} />
            </label>
            <label>
                <span>Delivery Time</span>
                <input type="text" onChange={(e) => setDeliveryTime(e.target.value)} />
            </label>
            <button type="button" className="submit" onClick={addNewProject}>add project</button>
            </Modal.Body>
      </Modal>
        </div>
    )
}

export default AddProjects