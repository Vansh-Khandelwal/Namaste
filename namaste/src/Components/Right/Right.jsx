import React, {useState} from 'react'
import './Right.css'

import TrendCard  from './TrendCard/TrendCard'

import ShareModal from './ShareModal/ShareModal'
import Navicons from '../Navicons/Navicons'

const Right = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className='right'>

      <Navicons/>
      <TrendCard/>

      <button className="button r-btn" onClick={()=>setOpen(true)}>
        Share
      </button>

      <ShareModal share={open} setShare={setOpen} />

    </div>
  )
}

export default Right