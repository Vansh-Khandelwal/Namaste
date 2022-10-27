import React from 'react'
import PostLayout from '../../Components/PostLayout/PostLayout'
import Profile_card from '../../Components/Profile/Profile_Card/Profile_card'
import ProfilePgLeft from '../../Components/ProfilePgLeft/ProfilePgLeft'
import Right from '../../Components/Right/Right'
import './Profilepg.css'

const Profilepg = (ProfilePage) => {
  return (
    <div className="Profile-page">
      <ProfilePgLeft/>
      <div className="Profilepg-center">
        <Profile_card ProfilePage={ProfilePage}/>
        <PostLayout/>
      </div>
      <Right/>
    </div>
  )
}

export default Profilepg