import React, {useState} from 'react'
import './Right.css'
import {Link} from 'react-router-dom'

import TrendCard  from './TrendCard/TrendCard'

import {HiHome} from 'react-icons/hi'
import {IoNotifications} from 'react-icons/io5'
import {FaRegCommentDots} from 'react-icons/fa'
import {RiSettings3Fill} from 'react-icons/ri'
import ShareModal from './ShareModal/ShareModal'

const Right = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className='right'>
      <div className="navicons">
        <Link to = '../home'>
          <HiHome/>
        </Link>
        <Link>   
          <IoNotifications/>
        </Link>
        <Link>
          <FaRegCommentDots/>
        </Link>
        <Link>
          <RiSettings3Fill/>
        </Link>
      </div>

      <TrendCard/>

      <button className="button r-btn" onClick={()=>setOpen(true)}>
        Share
      </button>

      <ShareModal share={open} setShare={setOpen} />

    </div>
  )
}

export default Right