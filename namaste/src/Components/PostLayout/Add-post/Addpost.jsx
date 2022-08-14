import React from 'react'
import './Addpost.css'

import dp from '../../../images/dp.jpg'

import {MdImage, MdVideocam, MdLocationPin, MdSchedule} from 'react-icons/md'

export const Addpost = () => {
  return (
    <div className="Addpost">
        <div className="addpost-input">
            <img src={dp} alt="" className="addpost-prof-image"/>
            <input type="text" className="addpost-caption" placeholder="What's happening?"/>
        </div>
        <div className="addpost-options">
            <div className="i image-icon"><MdImage/><span>Photos</span></div>
            <div className="i video-icon"><MdVideocam/><span>Video</span></div>
            <div className="i location-icon"><MdLocationPin/><span>Location</span></div>
            <div className="i schedule-icon"><MdSchedule/><span>Schedule</span></div>
            <button className="button">Share</button>
        </div>
    </div>
  )
}
