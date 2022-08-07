import React from 'react'
import './Home.css'

import Profile from '../../Components/Profile/Profile'
import PostLayout from '../../Components/PostLayout/PostLayout'
import Right from '../../Components/Right/Right'

const Home = () => {
  return (
    <div className='home'>
        <div className="home-profile">
            <Profile/>
        </div>
        <div className="home-postlayout">
            <PostLayout/>
        </div>
        <div className="home-right">
            <Right/>
        </div>
    </div>
  )
}

export default Home