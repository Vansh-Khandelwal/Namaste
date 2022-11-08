import React from 'react'
import { followUser, unfollowUser } from '../../../../Actions/UserActions/followAction.js'

import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

export const UserFollow = ({person}) => {

    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
    const dispatch = useDispatch()
    
    const {user} = useSelector((state)=>state.authReducer.authData)

    const [following, setFollowing] = useState(person.Followers.includes(user._id))

    const handleFollow = () => {
        following? dispatch(unfollowUser(person._id, user)):
        dispatch(followUser(person._id, user))

        setFollowing((prev)=>!prev)
        console.log(user.Following)
    }

    return (
        <div className="follower-line">
            <div className="prof-about">
                <img src={person.ProfileImg? serverPublic + person.ProfileImg : serverPublic + 'DefaultProfile.jpg'} alt="" className="prof-image"/>
                <span>
                    <div className="prof-name">{person.Firstname}</div>
                    <div className="prof-tag">{person.Username}</div>
                </span>
            </div>
            <button className={following?"unfollow-button": "follow-button"} onClick={handleFollow}>{following? "Unfollow": "Follow"}</button>
        </div>
    )
}
