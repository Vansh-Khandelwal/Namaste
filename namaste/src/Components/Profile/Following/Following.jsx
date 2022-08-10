import React from 'react'
import './Following.css'
import { followers } from './following.js'

import dp from '../../../images/dp.jpg'

const Following = () => {
  return (
    <div className="following">
      <div className="following-title">Who is following you</div>
      <div className="following-list">

        <div className="follower-line">
          <div className="prof-about">
            <img src={dp} alt="" className="prof-image"/>
            <span>
              <div className="prof-name">Hi</div>
              <div className="prof-tag">@hi</div>
            </span>
          </div>
          <div className="follow-button">Follow</div>
        </div>

      </div>
    </div>
  )
}

export default Following