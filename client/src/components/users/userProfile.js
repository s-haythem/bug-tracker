import React from 'react'
import { useSelector} from 'react-redux'
import DeleteUserHandler from './deleteUser'
import EditUser from './editUser'

const UserProfile = () => { 
    const user = useSelector(state => state.auth.user)
    return (
        <div className="profile">
            <p >{`Name : ${user?.name}`}</p>
            <p >{`Last Name : ${user?.lastName}`}</p>
            <p >{`Phone : ${user?.phone}`}</p>
            <p >{`Address : ${user?.address}`}</p>
            <p >{`Email : ${user?.email}`}</p>
            <p >{`Role : ${user?.role}`}</p>
            <DeleteUserHandler user={user}/>
            <EditUser user={user}/>
        </div>
    )
}

export default UserProfile