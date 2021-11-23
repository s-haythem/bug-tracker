import { Link } from "react-router-dom"
import AddBugs from "../bugs/addBugs"
import GetBugs from "../bugs/getBugs"


const BugPage = () => {
    return (
        <div>
            welcome to bug page
            <h1 style={{backgroundColor:"grey"}}><Link to="/dashboard">back to dashboard</Link></h1>
            
            <AddBugs/>
            <GetBugs/>
        </div>
    )
}

export default BugPage