import React from 'react'
import { Link } from 'react-router-dom'

import {HiHome} from 'react-icons/hi'
import {IoNotifications} from 'react-icons/io5'
import {RiSettings3Fill, RiChatSmile2Fill} from 'react-icons/ri'

const Navicons = () => {
  return (
    <div className="navicons">
        <Link to = '../home' style={{color: "#ff7b08"}}>
            <HiHome/>
        </Link>
        <Link style={{color: "#ff7b08"}}>   
            <IoNotifications/>
        </Link>
        <Link to = '../chat' style={{color: "#ff7b08"}}>
            <RiChatSmile2Fill/>
        </Link>
        <Link style={{color: "#ff7b08"}}>
            <RiSettings3Fill/>
        </Link>
    </div>
  )
}

export default Navicons