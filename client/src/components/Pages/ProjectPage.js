import { Link } from "react-router-dom"



const ProjectPage = () => {
    return (
        <div>
            welcome to project page
            <h1 style={{backgroundColor:"grey"}}><Link to="/dashboard">back to dashboard</Link></h1>
        </div>
    )
}

export default ProjectPage