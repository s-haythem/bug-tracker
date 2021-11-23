import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const UserProfile = () => {
    const dispatch = useDispatch() 
    const user = useSelector(state => state.auth.user)
    return (
        <div className="profile">
            <p >{`Name : ${user?.name}`}</p>
            <p >{`Last Name : ${user?.lastName}`}</p>
            <p >{`Phone : ${user?.phone}`}</p>
            <p >{`Address : ${user?.address}`}</p>
            <p >{`Email : ${user?.email}`}</p>
            <p >{`Role : ${user?.role}`}</p>
        </div>
    )
}

export default UserProfile