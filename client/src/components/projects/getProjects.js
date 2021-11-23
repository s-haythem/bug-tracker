import React from "react";
import { useSelector } from "react-redux";
import Project from "./project";


const GetProjects = () => {
    const projects = useSelector(state => state.project.project)
    return (
        <div className="bugs-list">
            {projects.map((el) => < Project  project={el}/>)}
        </div>
    )
}

export default GetProjects