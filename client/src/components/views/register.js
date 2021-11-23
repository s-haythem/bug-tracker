import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { registerHandler } from "../../redux/action/auth-action";
import './login.css'
import { Link } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("")

    const dispatch = useDispatch();
  const registerUser = (e) => {
    e.preventDefault()
    const newUser = { name, lastName,phone,address, email, password,role };
    dispatch(registerHandler(newUser));
    setName("")
    setLastName("")
    setPhone("")
    setAddress("")
    setEmail("")
    setPassword("")
    setRole("")
  };
    return (
        <div className="body">
    <div className="cont">
        <div className="form sign-in">
            <h2>Welcome,</h2>
            <label>
                <span>Name</span>
                <input type="text" onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                <span>LastName</span>
                <input type="text" onChange={(e) => setLastName(e.target.value)} />
            </label>
            <label>
                <span>Address</span>
                <input type="text" onChange={(e) => setAddress(e.target.value)} />
            </label>
            <label>
                <span>Phone Number</span>
                <input type="text" onChange={(e) => setPhone(e.target.value)} />
            </label>
            <label>
                <span>Email</span>
                <input type="email" onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                <span>Password</span>
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
            </label>
            <label>
            <span>Role</span>
            <select  name='role' onChange={(e) => setRole(e.target.value)}>
                <option value="Admin">Admin</option>
                <option value="Developer">Developer</option>
                <option value="client">client</option>
            </select>
            </label>
            <button type="button" className="submit" onClick={registerUser}><Link to="/login">Sign Up</Link></button>
        </div>
        <div className="sub-cont">
            <div className="img"></div>
        </div>
    </div>
</div>
    )
}

export default Register