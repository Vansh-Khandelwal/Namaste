import React from 'react'
import './Home.css'

import { useSelector } from 'react-redux'

import Profile from '../../Components/Profile/Profile'
import PostLayout from '../../Components/PostLayout/PostLayout'
import Right from '../../Components/Right/Right'
import Navbar from '../../Components/Navbar/Navbar'
import Loading from '../../Components/Loading'
import Error from '../../Components/Error'

const Home = () => {
  const { user } = useSelector((state) => state.authReducer.authData)
  const { loading, error } = useSelector((state) => state.authReducer)

  // console.log(user)

  return (
    <>
      {
        error ? <Error error={error} /> :
          loading ? <Loading /> :
            user && user._id ?
              <>
                <Navbar user={user} />
                <div className='home'>
                  <Profile ProfilePage={false} user={user} />
                  <PostLayout user={user} />
                  <Right />
                </div>
              </> : <h1>User Not Found</h1>
      }
    </>
  )
}

export default Home