import React from 'react'
import './Following.css'
import { followers } from '../../../Data/following.js'

import { UserFollow } from '../UserFollow/UserFollow.jsx'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getAllUser } from '../../../Api/UserRequest.js'

const Following = () => {

  const [persons, setPersons] = useState([])
  const {user} = useSelector((state)=> state.authReducer.authData)

  useEffect(() => {
      const fetchpersons = async() => {
        const {data} = await getAllUser();
        setPersons(data)
        console.log(data)
      }
      fetchpersons()
  }, [])
  

  return (
    <div className="following">
      <div className="following-title">Who is following you</div>
      <div className="following-list">
      {
        followers.map((follower, id)=>{
          return(
            <UserFollow person = {follower} key = {id} />
          )
        })
      }
        {/* <div className="follower-line">
          <div className="prof-about">
            <img src={dp} alt="" className="prof-image"/>
            <span>
              <div className="prof-name">Hi</div>
              <div className="prof-tag">@hi</div>
            </span>
          </div>
          <div className="follow-button">Follow</div>
        </div> */}

      </div>
    </div>
  )
}

export default Following