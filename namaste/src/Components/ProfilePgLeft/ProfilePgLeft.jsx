import React from 'react'
import Following from '../Profile/Following/Following'
import Search from '../Profile/Search/Search'
import ProfileInfoCard from './ProfileInfoCard/ProfileInfoCard'
import './ProfilePgLeft.css'

const ProfilePgLeft = () => {
  return (
    <div className="ProfilePg-left">
        <Search/>
        <ProfileInfoCard/>
        <Following/>
    </div>
  )
}

export default ProfilePgLeft