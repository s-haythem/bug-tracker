import React from 'react'
import { useSelector} from 'react-redux'
import DeleteUserHandler from './deleteUser'
import EditUser from './editUser'
import "./userProfile.css"

const UserProfile = () => { 
    const user = useSelector(state => state.auth.user)
    return (
        <div className="profile">
            <span className="profile-el">{`Name : ${user?.name}`}</span>
            <span className="profile-el">{`Last Name : ${user?.lastName}`}</span>
            <span className="profile-el">{`Phone : ${user?.phone}`}</span>
            <span className="profile-el">{`Address : ${user?.address}`}</span>
            <span className="profile-el">{`Email : ${user?.email}`}</span>
            <span className="profile-el">{`Role : ${user?.role}`}</span>
            <div className="btns">
            <EditUser user={user}/>
            <DeleteUserHandler user={user}/>
            </div>
            
        </div>
    )
}

export default UserProfile