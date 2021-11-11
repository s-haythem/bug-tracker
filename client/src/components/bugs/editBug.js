import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { updateBugHandler } from "../../redux/action/bug_actions";
import { Modal } from "react-bootstrap";
import "./editBug.css"

const EditBugs = ({bug}) => {
    const [show, setShow] = useState(false);
    const [name,setName] = useState("")
    const [description,setDescription]= useState("")
    const [location,setLocation] = useState("")
    const [priority,setPriority] = useState("")
    const [status,setStatus] = useState("")
    const dispatch = useDispatch()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const EditBug = (e) => {
        e.preventDefault()
        const editedBug= {name,description,location,priority,status}
        dispatch(updateBugHandler(bug._id,editedBug))
        handleClose();
    }
    return (
        <div>
            <button className="btn-edit" onClick={handleShow}>
                    Edit
             </button>
             <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit bug</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <label>
                <span>Name</span>
                <input type="text" onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                <span>Description</span>
                <input type="text" onChange={(e) => setDescription(e.target.value)} />
            </label>
            <label>
                <span>Location</span>
                <input type="text" onChange={(e) => setLocation(e.target.value)} />
            </label>
            <label>
                <span>Priority</span>
                <input type="text" onChange={(e) => setPriority(e.target.value)} />
            </label>
            <label>
                <span>Status</span>
                <input type="text" onChange={(e) => setStatus(e.target.value)} />
            </label>
            <button type="button" className="submit" onClick={EditBug}>edit bug</button>
            </Modal.Body>
      </Modal>
        </div>
    )
}

export default EditBugs