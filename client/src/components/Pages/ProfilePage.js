import { Link } from "react-router-dom"




const ProfilePage = () => {
    return (
        <div>
            welcome to profile page
            <h1 style={{backgroundColor:"grey"}}><Link to="/dashboard">back to dashboard</Link></h1>
            
        </div>
    )
}

export default ProfilePage