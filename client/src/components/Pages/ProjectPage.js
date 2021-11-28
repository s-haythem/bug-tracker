import AddProjects from "../projects/addProject"
import GetProjects from "../projects/getProjects"
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { logoutHandler } from "../../redux/action/auth-action";
import "../views/dashboard.css"
import { BsBoxArrowRight } from "react-icons/bs";


export default function Dashboard() {

const dispatch = useDispatch() 
const logoutUser=()=>{
dispatch(logoutHandler())
}


    return (
        <div className="dashboard">
            <div className="dash-nav">
                <div className="dash-nav-left">
                    <p>Bug_Tracker V1.00</p> 
                </div>
                <div className="dash-nav-right">
                <button className="Logout" onClick={logoutUser}>
            <Link to="/">
            <i class="fas fa-sign-out-alt" id="logout"></i>
            </Link>
        </button>
                </div>
                
            </div>
            <div className="dash-space">
            <div class="sidebar">
            <header>My Menu</header>
            <a href="/Dashboard" class="active">
            <i class="fas fa-qrcode"></i>
            <span> Dashboard </span>
            </a>
            <a href="/dashboard/bugs">
            <i class="fas fa-link"></i>
            <span>Bugs</span>
            </a>
            <a href="/dashboard/projects">
            <i class="fas fa-stream"></i>
            <span>Projects</span>
            </a>
            <a href="/dashboard/profile">
            <i class="fas fa-user"></i>
            <span>Profile</span>
            </a>
            <a href="#">
            <i class="fas fa-address-card"></i>
            <span>About</span>
            </a>
            <a href="#">
            <i class="far fa-envelope"></i>
            <span>Contact</span>
            </a>
                </div>
                <div className="dash-work">
                   
                    <div style={{margin : "10px"}}><AddProjects/></div>
                
                <div className="Projects">
                <GetProjects/>
                </div>
                </div>

            </div>
            <div className="dash-footer">
                <p>© 2021</p>
            </div>
        </div>
    )
}
