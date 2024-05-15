import React from 'react'
import { followUser, unfollowUser } from '../../../../Actions/UserActions/followAction.js'

import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { createChat, findChat } from '../../../../Actions/UserActions/chatAction.js'

export const UserFollow = ({person}) => {

    // const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
    const dispatch = useDispatch()
    
    const {user} = useSelector((state)=>state.authReducer.authData)

    const [following, setFollowing] = useState(person.Followers.includes(user._id))

    const handleFollow = () => {
        if (following) {
            dispatch(unfollowUser(person._id, user));
        } else {
            dispatch(followUser(person._id, user));
            dispatch(findChat(person._id, user._id)).then((res) => {
                if (res.data) {
                    console.log("Chat already present")
                } else {
                    dispatch(createChat(user._id, person._id))
                    console.log("Chat created")
                }
            })
        }

        setFollowing((prev)=>!prev)
        // console.log(user.Following, person)
    }

    // console.log(person)

    return (
        <div className="follower-line">
            <div className="prof-about">
                <img src={person.ProfileImg && person.ProfileImg.url ? person.ProfileImg.url : 'https://res.cloudinary.com/drvbnhsxg/image/upload/v1714810023/profile/DefaultProfile_o4oqbk.jpg'} alt="" className="prof-image" />
                <span>
                    <div className="prof-name">{person.Firstname}</div>
                    <div className="prof-tag">{person.Username}</div>
                </span>
            </div>
            <button className={following?"unfollow-button": "follow-button"} onClick={handleFollow}>{following? "Unfollow": "Follow"}</button>
        </div>
    )
}
