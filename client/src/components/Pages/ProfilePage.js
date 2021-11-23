import { Link } from "react-router-dom"
import UserProfile from "../users/userProfile"




const ProfilePage = () => {
    return (
        <div>
            welcome to profile page
            <h1 style={{backgroundColor:"grey"}}><Link to="/dashboard">back to dashboard</Link></h1>
            <UserProfile/>
            
        </div>
    )
}

export default ProfilePage