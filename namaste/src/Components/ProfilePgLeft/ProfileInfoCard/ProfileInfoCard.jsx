import React from 'react'
import './ProfileInfoCard.css'

import {MdEdit} from 'react-icons/md'

const ProfileInfoCard = () => {
  return (
    <div className="ProfileInfoCard">

        <div className="Info-head">
            <h3>Your Info:</h3>
            <div><MdEdit style={{"fontSize": "1.2rem"}}/></div>
        </div>
        
        <div className="Info">
            <span><b>Status</b> </span>
            <span>Sleeping</span>
        </div>

        <div className="Info">
            <span><b>Lives in</b> </span>
            <span>Delhi</span>
        </div>

        <div className="Info">
            <span><b>Study in</b> </span>
            <span>Delhi Technological University</span>
        </div>

        <button className="button logout-btn">Log out</button>

    </div>
  )
}

export default ProfileInfoCard