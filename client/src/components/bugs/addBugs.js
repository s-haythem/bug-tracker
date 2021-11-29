import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addBugHandler } from "../../redux/action/bug_actions";
import { Modal, Button} from "react-bootstrap";

const AddBugs = () => {
    const [show, setShow] = useState(false);
    const [name,setName] = useState("")
    const [description,setDescription]= useState("")
    const [location,setLocation] = useState("")
    const [priority,setPriority] = useState("")
    const [status,setStatus] = useState("")
    const dispatch = useDispatch()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addNewBug = (e) => {
        e.preventDefault()
        const newBug = {name, description, location, priority,status}
        dispatch(addBugHandler(newBug))
        handleClose();
    }
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                    Add bug
             </Button>
             <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add bug</Modal.Title>
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
                <select  name='Priority' onChange={(e) => setPriority(e.target.value)}>
                <option>Select Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            </label>
            <label>
                <span>Status</span>
                <select  name='Status' onChange={(e) => setStatus(e.target.value)}>
                <option>Select Status</option>
                <option value="Open">Open</option>
                <option value="Ongoing">Ongoing</option>
                <option value="Closed">Closed</option>
            </select>
            </label>
            <button type="button" className="submit" onClick={addNewBug}>add bug</button>
            </Modal.Body>
      </Modal>
        </div>
    )
}

export default AddBugs