import React from 'react'
import './Following.css'
// import { followers } from '../../../Data/following.js'

import { UserFollow } from './UserFollow/UserFollow.jsx'
import { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
import { getAllUser } from '../../../Api/UserRequest.js'

const Following = ({ user }) => {

  const [persons, setPersons] = useState([])
  // const {user} = useSelector((state)=> state.authReducer.authData)

  useEffect(() => {
      const fetchpersons = async() => {
        const {data} = await getAllUser();

        // Filter the User Id
        data.filter(function (item) {
          // console.log(user)
          return item._id !== user?._id
        })

        setPersons(data)
      }
      fetchpersons()
  }, [user])


  return (
    <div className="following">
      <div className="following-title">People you might know</div>
      <div className="following-list">
      {
        persons.map((follower, id)=>{
          if (follower._id !== user?._id) {
            return(
              <UserFollow person = {follower} key = {id} />
            )
          } else {
            return null
          }
        })
      }
      </div>
    </div>
  )
}

export default Following