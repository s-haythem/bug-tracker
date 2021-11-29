import React from 'react'
import { Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { logoutHandler } from "../../redux/action/auth-action";
import "./dashboard.css"


export default function Dashboard() {

const dispatch = useDispatch() 
const bugs = useSelector(state => state.bug.bug)
const projects = useSelector(state => state.project.project)

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
            <a href="#">
            <i className="fas fa-address-card"></i>
            <span>About</span>
            </a>
            <a href="#">
            <i className="far fa-envelope"></i>
            <span>Contact</span>
            </a>
                </div>
                <div className="dash-work">
                    <div className="dash-display">
                    <div className="allBugsCard">
                        <Card className="allDisplay">
                        <Card.Text>All Bugs</Card.Text>
                        <Card.Text>{bugs.length}</Card.Text>
                        </Card>
                    </div>
                    <div className="allProjectsCard">
                    <Card className="allDisplay" >
                        <Card.Text>All Projects</Card.Text>
                        <Card.Text>{projects.length}</Card.Text>
                        </Card>
                    </div>
                    </div>
                </div>

            </div>
            <div className="dash-footer">
                <p>© 2021</p>
            </div>
        </div>
    )
}
