import React, {useState} from 'react'
import './ProfileInfoCard.css'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'

import ProfileModal from '../ProfileModal/ProfileModal'
import * as UserApi from '../../../Api/UserRequest.js'

import {MdEdit} from 'react-icons/md'
import { useEffect } from 'react'

const ProfileInfoCard = () => {

    const [open, setOpen] = useState(false)

    const dispatch = useDispatch()
    const params = useParams()

    const profileUserId = params.id
    const [profileUser, setProfileUser] = useState({})

    const {user} = useSelector((state)=> state.authReducer.authData)

    useEffect(()=>{
        const fetchprofileUser = async() =>{
            if(profileUserId === user._id)
            {
                setProfileUser(user)
                console.log(user)
            }
            else
            {
                const profileUser = await UserApi.getUser(profileUserId)
                setProfileUser(profileUser)
                console.log(profileUser)
            }
        }
    })


  return (
    <div className="ProfileInfoCard">

        <div className="Info-head">
            <h3>Your Info:</h3>
            <div><MdEdit style={{"fontSize": "1.2rem"}} onClick={()=>setOpen(true)}/></div>
            <ProfileModal openEdit={open} setOpenEdit={setOpen}/>
        </div>
        
        <div className="Info">
            <span><b>Status</b> </span>
            <span>Single AF</span>
        </div>

        <div className="Info">
            <span><b>Lives in</b> </span>
            <span>Delhi</span>
        </div>

        <div className="Info">
            <span><b>Works at/Study in</b> </span>
            <span>Delhi Technological University</span>
        </div>

        <button className="button logout-btn">Log out</button>

    </div>
  )
}

export default ProfileInfoCard