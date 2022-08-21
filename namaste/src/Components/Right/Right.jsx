import React from 'react'
import './Right.css'

import TrendCard  from './TrendCard/TrendCard'

import {HiHome} from 'react-icons/hi'
import {IoNotifications} from 'react-icons/io5'
import {FaRegCommentDots} from 'react-icons/fa'
import {RiSettings3Fill} from 'react-icons/ri'

const Right = () => {
  return (
    <div className='right'>
      <div className="navicons">
        <HiHome/>
        <IoNotifications/>
        <FaRegCommentDots/>
        <RiSettings3Fill/>
      </div>

      <TrendCard/>

      <button className="button r-btn">
        Share
      </button>
    </div>
  )
}

export default Right