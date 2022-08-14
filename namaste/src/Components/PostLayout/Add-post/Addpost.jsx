import React from 'react'
import './Addpost.css'

import dp from '../../../images/dp.jpg'

export const Addpost = () => {
  return (
    <div className="Addpost">
        <div className="addpost-input">
            <img src={dp} alt="" className="addpost-prof-image"/>
            <input type="text" className="addpost-caption" placeholder="What's happening?"/>
        </div>
        <div className="addpost-options">
            <div className="image-icon"></div>
            <div className="video-icon"></div>
            <div className="location-icon"></div>
            <div className="schedule-icon"></div>
            <button className="button">Share</button>
        </div>
    </div>
  )
}
