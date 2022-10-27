import React, {useState} from 'react'
import './ProfileInfoCard.css'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'

import ProfileModal from '../ProfileModal/ProfileModal.jsx'
import * as UserApi from '../../../Api/UserRequest.js'
import { logOut } from '../../../Actions/AuthActions/logOut.js'

import {MdEdit} from 'react-icons/md'
import { useEffect } from 'react'

const ProfileInfoCard = () => {

    const [open, setOpen] = useState(false)

    const dispatch = useDispatch()
    const params = useParams()

    const profileUserId = params.id
    const [profileUser, setProfileUser] = useState({})

    const {user} = useSelector((state) => state.authReducer.authData)

    useEffect(()=>{
        const fetchprofileUser = async() =>{
            if(profileUserId === user._id)
            {
                setProfileUser(user)
            }
            else
            {
                const profile = await UserApi.getUser(profileUserId)
                setProfileUser(profile)
            }
        }
        fetchprofileUser()
    }, [user])

    const handleLogOut = () => {
        dispatch(logOut())
    }

  return (
    <div className="ProfileInfoCard">

        <div className="Info-head">
            <h3>Profile Info:</h3>
            { 
                user._id === profileUserId ? (
                <div>
                    <MdEdit style={{"fontSize": "1.2rem"}} onClick={()=>setOpen(true)} />
                    <ProfileModal openEdit={open} setOpenEdit={setOpen} data = {user} />
                </div>
                ): ("")  
            }
            {
                console.log(profileUser)
            }
            
        </div>
        
        <div className="Info">
            <span><b>Status</b> </span>
            <span>{profileUser.Relationship_Status}</span>
        </div>

        <div className="Info">
            <span><b>Lives in</b> </span>
            <span>{profileUser.LivesIn}</span>
        </div>

        <div className="Info">
            <span><b>Works at/Study in</b> </span>
            <span>{profileUser.WorksAt}</span>
        </div>

        <button className="button logout-btn" onClick={handleLogOut}>Log out</button>

    </div>
  )
}

export default ProfileInfoCard