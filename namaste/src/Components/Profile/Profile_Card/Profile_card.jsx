import React from 'react'
import './Profile_card.css'

import cover from '../../../images/cover.jpg'
import dp from '../../../images/dp.jpg'

const Profile_card = () => {
  return (
    <div className='profile-card'>
      <div className="profile-images">
        <img src={cover} alt="cover_image"/>
        <img src={dp} alt="display_image"/>
      </div>

      <div className="profile-about">
        <div className="profile-name">Vansh Khandelwal</div>
        <div className="profile-description">Full Stack Web Developer</div>
      </div>

      <div className="follow-status">
        <hr />
        <div className='f-status'>
          <div className="followers">
            <span className="num-followers">6,235</span>
            <span>Followers</span>
          </div>
          <div className="followings">
            <span className="num-following">1223</span>
            <span>Following</span>
          </div>
          <div className="posts">
            <span className="num-posts">3</span>
            <span>Posts</span>
          </div>
        </div>
        <hr />
      </div>

      <div className="profile-link">
        My Profile
      </div>
    </div>
  )
}

export default Profile_card