import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { updateUser } from "../../redux/action/auth-action";

const EditUser = ({user}) => {
    const [show, setShow] = useState(false);
    const [name,setName] = useState("")
    const [lastName,setLastName]= useState("")
    const [address,setAddress] = useState("")
    const [phone,setPhone] = useState("")
    const dispatch = useDispatch()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const updateUserHandler = (e) => {
        e.preventDefault()
        const updatedUser= {name,lastName,address,phone}
        dispatch(updateUser(user._id,updatedUser))
        handleClose();
    }
    return (
        <div>
            <button className="btn-edit" onClick={handleShow}>
                    Edit
             </button>
             <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <label>
                <span>Name</span>
                <input type="text" onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                <span>lastName</span>
                <input type="text" onChange={(e) => setLastName(e.target.value)} />
            </label>
            <label>
                <span>Address</span>
                <input type="text" onChange={(e) => setAddress(e.target.value)} />
            </label>
            <label>
                <span>Phone</span>
                <input type="text" onChange={(e) => setPhone(e.target.value)} />
            </label>
            <button type="button" className="submit" onClick={updateUserHandler}>edit user</button>
            </Modal.Body>
      </Modal>
        </div>
    )
}

export default EditUser