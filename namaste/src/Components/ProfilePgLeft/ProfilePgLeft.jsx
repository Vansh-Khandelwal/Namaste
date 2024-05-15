import React from 'react'
import Following from '../Profile/Following/Following'
import Search from '../Profile/Search/Search'
import ProfileInfoCard from './ProfileInfoCard/ProfileInfoCard'
import './ProfilePgLeft.css'

const ProfilePgLeft = ({ user }) => {
  return (
    <div className="ProfilePg-left">
      <Search />
      <ProfileInfoCard user={user} />
      <Following user={user} />
    </div>
  )
}

export default ProfilePgLeft