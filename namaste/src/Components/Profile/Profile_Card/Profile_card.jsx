import React from 'react'
import './Profile_card.css'

import cover from '../../../images/cover.jpg'
import dp from '../../../images/dp.jpg'

const Profile_card = () => {
  return (
    <div className='profile-card'>
      <div className="profile-images">
        <img src={cover} alt="" className='cover'/>
        <img src={dp} alt="" className='dp'/>
      </div>
    </div>
  )
}

export default Profile_card