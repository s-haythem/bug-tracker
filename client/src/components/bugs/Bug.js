import "./Bug.css"
import EditBugs from "./editBug";

const Bug = ({bug}) => {
    console.log(bug);
    return (
        <div className="bugs-card">
            <div>
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
           <EditBugs bug={bug}/>
        </div>
    )
}

export default Bug