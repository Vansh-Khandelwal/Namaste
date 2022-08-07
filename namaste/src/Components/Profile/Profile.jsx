import React from 'react'


import Following from './Following/Following'
import ProfileCard from './Profile_Card/Profile_card'
import Search from './Search/Search'

const Profile = () => {
  return (
    <div className='profile'>
      <Search/>
      <ProfileCard/>
      <Following/>
    </div>
  )
}

export default Profile