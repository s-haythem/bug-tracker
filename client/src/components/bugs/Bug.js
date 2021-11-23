import "./Bug.css"
import EditBugs from "./editBug";
import { Table } from "react-bootstrap";
import DeleteBug from "./deleteBug";

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
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{bug.name}</td>
      <td>{bug.description}</td>
      <td>{bug.location}</td>
      <td>{bug.status}</td>
      <td>{bug.priority}</td>
      <td>
        <EditBugs bug={bug}/>
        <DeleteBug bug={bug}/>
      </td>
    </tr>
  </tbody>
</Table>
        </div>
    )
}

export default Bug