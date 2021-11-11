import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { logoutHandler } from "../../redux/action/auth-action";
import AddBugs from '../bugs/addBugs';
import GetBugs from '../bugs/getBugs';
import "./dashboard.css"


export default function Dashboard() {

const dispatch = useDispatch() 
const user = useSelector(state => state.auth.user)
const logoutUser=()=>{
dispatch(logoutHandler())
}


    return (
        <div className="dashboard">
            <div className="dash-nav">
                <div className="dash-nav-left">
                    <p style={{marginLeft :"20px"}}>{`welcome : ${user?.name} ${user?.lastName}`}</p>
                </div>
                <div className="dash-nav-right">
                    <button onClick={logoutUser}><Link to="/">logout</Link></button>
                </div>
                
            </div>
            <div className="dash-space">
                <div className="dash-left">
                    <ul>
                        <li>
                            <span><Link to="/dashboard/projects">Projects</Link></span>
                        </li>
                        <li>
                            <span><Link to="/dashboard/bugs">Bugs</Link></span>
                        </li>
                        <li>
                            <span><Link to="/dashboard/profile">Profile</Link></span>
                        </li>
                    </ul>
                </div>
                <div className="dash-work">
                    <GetBugs/>
                </div>

            </div>
        </div>
    )
}
