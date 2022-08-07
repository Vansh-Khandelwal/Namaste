import React from 'react'


import Following from './Following/Following'
import Profile_card from './Profile-Card/Profile_card'
import Search from './Search/Search'

const Profile = () => {
  return (
    <div className='profile'>
      <Search/>
      <Profile_card/>
      <Following/>
    </div>
  )
}

export default Profile