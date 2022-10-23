import React from 'react'
import {useSelector} from 'react-redux'

import './Profile_card.css'

const Profile_card = ({ProfilePage}) => {

  const {user} = useSelector((state) => state.authReducer.authData)

  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <div className='profile-card'>
      <div className="profile-images">
        <img src={user.CoverImg? serverPublic + user.CoverImg : serverPublic + 'DefaultCover.png'} alt="cover_image"/>
        <img src={user.ProfileImg? serverPublic + user.ProfileImg : serverPublic + 'DefaultProfile.jpg'} alt="display_image"/>
      </div>

      <div className="profile-about">
        <div className="profile-name">Vansh Khandelwal</div>
        <div className="profile-description">Full Stack Web Developer</div>
      </div>

      <div className="follow-status">
        <hr />
        <div className='f-status'>
          <div className="statusInfo followers">
            <span className="num-followers bold">6,235</span>
            <span className="gray">Followers</span>
          </div>
          <div className="statusInfo followings">
            <span className="num-following bold">1223</span>
            <span className="gray">Following</span>
          </div>

          {
            ProfilePage&&(
              <>
              <div className="statusInfo posts">
                <span className="num-posts bold">3</span>
                <span className="gray">Posts</span>
              </div>
              </>
            )
          }

        </div>
        <hr />
      </div>
      
      {
        ProfilePage?'':
        <div className="profile-link">
          My Profile
        </div>
      }
    </div>
  )
}

export default Profile_card