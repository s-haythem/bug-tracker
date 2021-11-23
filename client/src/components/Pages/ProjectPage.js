import { Link } from "react-router-dom"
import AddProjects from "../projects/addProject"
import GetProjects from "../projects/getProjects"



const ProjectPage = () => {
    return (
        <div>
            welcome to project page
            <h1 style={{backgroundColor:"grey"}}><Link to="/dashboard">back to dashboard</Link></h1>
            <AddProjects/>
            <GetProjects/>
        </div>
    )
}

export default ProjectPage