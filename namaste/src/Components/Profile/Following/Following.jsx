import React from 'react'
import './Following.css'
import { followers } from '../../../Data/following.js'

import dp from '../../../images/dp.jpg'

const Following = () => {
  return (
    <div className="following">
      <div className="following-title">Who is following you</div>
      <div className="following-list">
      {
        followers.map((follower, id)=>{
          return(
            <div className="follower-line" key={id}>
              <div className="prof-about">
                <img src={dp} alt="" className="prof-image"/>
                <span>
                  <div className="prof-name">{follower.name}</div>
                  <div className="prof-tag">@{follower.tag}</div>
                </span>
              </div>
              <button className="follow-button">Follow</button>
            </div>
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