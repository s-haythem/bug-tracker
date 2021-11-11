import React from "react";
import { useSelector } from "react-redux";
import "./getBugs.css"
import Bug from "./Bug";

const GetBugs = () => {
    const bugs = useSelector(state => state.bug.bug)
    console.log(bugs);
    return (
        <div className="bugs-list">
            {bugs.map((el) => < Bug  bug={el}/>)}
        </div>
    )
}

export default GetBugs