import "./Bug.css"
import EditBugs from "./editBug";
import DeleteBug from "./deleteBug";
import { Card } from "react-bootstrap";

const Bug = ({bug}) => {
    return (
        <div className="bugs-card">
            <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{bug.name}</Card.Title>
    <Card.Text>{`Location : ${bug.location}`}</Card.Text>
    <Card.Text>{`Status : ${bug.status}`}</Card.Text>
    <Card.Text>{`Priority : ${bug.priority}`}</Card.Text>
    <Card.Text>{`Description : ${bug.description}`}</Card.Text>
      <div className="bug-btns">
    <button><EditBugs bug={bug}/></button>
    <button><DeleteBug bug={bug}/></button>
    </div>
  </Card.Body>
</Card>
        </div>
    )
}

export default Bug