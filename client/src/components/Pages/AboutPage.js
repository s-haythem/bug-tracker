import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { logoutHandler } from "../../redux/action/auth-action";
import "../views/dashboard.css"


export default function AboutPage() {

const dispatch = useDispatch() 

const logoutUser=()=>{
dispatch(logoutHandler())
}


    return (
        <div className="dashboard">
            <div className="dash-nav">
                <div className="dash-nav-left">
                    <p style={{marginLeft :"20px"}}>Bug_Tracker V1.00</p> 
                </div>
                <div className="dash-nav-right">
                <button className="Logout" onClick={logoutUser}>
            <Link to="/">
            <i className="fas fa-sign-out-alt" id="logout"></i>
            </Link>
        </button>
                </div>
                
            </div>
            <div className="dash-space">
    
        <div className="sidebar">
            <header>My Menu</header>
            <a href="/Dashboard" className="active">
            <i className="fas fa-qrcode"></i>
            <span> Dashboard </span>
            </a>
            <a href="/dashboard/bugs">
            <i className="fas fa-link"></i>
            <span>Bugs</span>
            </a>
            <a href="/dashboard/projects">
            <i className="fas fa-stream"></i>
            <span>Projects</span>
            </a>
            <a href="/dashboard/profile">
            <i className="fas fa-user"></i>
            <span>Profile</span>
            </a>
            <a href="/dashboard/about">
            <i className="fas fa-address-card"></i>
            <span>About</span>
            </a>
            <a href="/dashboard/contact">
            <i className="far fa-envelope"></i>
            <span>Contact</span>
            </a>
                </div>
                <div className="dash-work">
                    <p>This project is created by :<br/>
                         Haythem Smirani <br/>
                         Wael Chaieb <br/>
                         Nidhal Khatar
                    </p>
                </div>

            </div>
            <div className="dash-footer">
                <p>© 2021</p>
            </div>
        </div>
    )
}
