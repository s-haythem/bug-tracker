import { Link } from "react-router-dom"
import AddBugs from "../bugs/addBugs"


const BugPage = () => {
    return (
        <div>
            welcome to bug page
            <h1 style={{backgroundColor:"grey"}}><Link to="/dashboard">back to dashboard</Link></h1>
            <AddBugs/>
        </div>
    )
}

export default BugPage