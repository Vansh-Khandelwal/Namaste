import React from 'react'
import './Home.css'

import Profile from '../../Components/Profile/Profile'
import PostLayout from '../../Components/PostLayout/PostLayout'
import Right from '../../Components/Right/Right'
import Navbar from '../../Components/Navbar/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='home'>
        <Profile ProfilePage={false} />
        <PostLayout />
        <Right />
      </div>
    </>
  )
}

export default Home