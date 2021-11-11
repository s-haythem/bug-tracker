import "./Bug.css"
import EditBugs from "./editBug";
import { Table } from "react-bootstrap";

const Bug = ({bug}) => {
    console.log(bug);
    return (
        <div className="bugs-table">
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>name</th>
      <th>description</th>
      <th>location</th>
      <th>status</th>
      <th>priority</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{bug.name}</td>
      <td>{bug.description}</td>
      <td>{bug.location}</td>
      <td>{bug.status}</td>
      <td>{bug.priority}</td>
    </tr>
  </tbody>
</Table>
            {/* <div>
                <span>Name</span>
                <h4>{bug.name}</h4>
            </div>
            <div>
                <span>Description</span>
                <h4>{bug.description}</h4>
            </div>
            <div>
                <span>Location</span>
                <h4>{bug.location}</h4>
            </div>
            <div>
                <span>Priority</span>
                <h4>{bug.priority}</h4>
            </div>
            <div>
                <span>Status</span>
                <h4>{bug.status}</h4>
            </div>
           <EditBugs bug={bug}/> */}
        </div>
    )
}

export default Bug