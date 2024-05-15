import React from 'react'
import { useSelector } from 'react-redux'

import Loading from "../../Components/Loading.jsx"
import Error from '../../Components/Error.jsx'
import Navbar from '../../Components/Navbar/Navbar.jsx'
import PostLayout from '../../Components/PostLayout/PostLayout.jsx'
import ProfileCard from '../../Components/Profile/Profile_Card/Profile_Card.jsx'
import ProfilePgLeft from '../../Components/ProfilePgLeft/ProfilePgLeft.jsx'
import Right from '../../Components/Right/Right.jsx'
import './Profilepg.css'

const Profilepg = (ProfilePage) => {

  const { user } = useSelector((state) => state.authReducer.authData)
  const { loading, error } = useSelector((state) => state.authReducer)

  return (
    <>
      {error ? <Error error={error} /> :
        loading ?
          <Loading /> :
          user && user._id ?
            <>
              <Navbar />
              <div className="Profile-page">
                <ProfilePgLeft user={user} />
                <div className="Profilepg-center">
                  <ProfileCard ProfilePage={ProfilePage} user={user} />
                  <PostLayout user={user} />
                </div>
                <Right />
              </div>
            </> :
            <><h1>User Not Found</h1></>
      }
    </>
  )
}

export default Profilepg