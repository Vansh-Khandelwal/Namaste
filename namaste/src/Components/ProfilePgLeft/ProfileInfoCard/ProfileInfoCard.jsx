import React, {useState} from 'react'
import './ProfileInfoCard.css'

import ProfileModal from '../ProfileModal/ProfileModal'

import {MdEdit} from 'react-icons/md'

const ProfileInfoCard = () => {

    const [open, setOpen] = useState(false)

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