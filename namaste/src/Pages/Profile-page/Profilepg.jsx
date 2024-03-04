import React from 'react'
import Navbar from '../../Components/Navbar/Navbar.jsx'
import PostLayout from '../../Components/PostLayout/PostLayout.jsx'
import ProfileCard from '../../Components/Profile/Profile_Card/Profile_Card.jsx'
import ProfilePgLeft from '../../Components/ProfilePgLeft/ProfilePgLeft.jsx'
import Right from '../../Components/Right/Right.jsx'
import './Profilepg.css'

const Profilepg = (ProfilePage) => {
  return (
    <>
      <Navbar />
    <div className="Profile-page">
      <ProfilePgLeft/>
      <div className="Profilepg-center">
        <ProfileCard ProfilePage={ProfilePage} />
        <PostLayout/>
      </div>
      <Right/>
    </div>
    </>
  )
}

export default Profilepg