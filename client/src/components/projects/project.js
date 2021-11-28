
import EditProjects from "./editProject";
import DeleteProject from "./deleteProject";
import { Card } from "react-bootstrap";
import "./project.css"

const Project = ({project}) => {
    
    return (
        <div className="project-card">

<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{project.title}</Card.Title>
    <Card.Text>{`Description : ${project.description}`}</Card.Text>
    <Card.Text>{`Delivery Time : ${project.deliveryTime}`}</Card.Text>
      <div className="project-btns">
        <EditProjects project={project}/>
        <DeleteProject project={project}/>
    </div>
  </Card.Body>
</Card>
        </div>
    )
}

export default Project