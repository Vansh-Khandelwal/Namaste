import React, {useState, useRef} from 'react'
import './Addpost.css'

import dp from '../../../images/dp.jpg'

import {MdImage, MdVideocam, MdLocationPin, MdSchedule, MdOutlineCancel} from 'react-icons/md'

export const Addpost = () => {

  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (event)=>{
    if(event.target.files&&event.target.files[0])
    {
      let img = event.target.files[0];
      setImage({image: URL.createObjectURL(img)},);
    }
  }

  return (
    <div className="Addpost">
        <div className="addpost-input">
            <img src={dp} alt="" className="addpost-prof-image"/>
            <input type="text" className="addpost-caption" placeholder="What's happening?"/>
        </div>
        <div className="addpost-options">
            <div className="i image-icon" onClick={()=>imageRef.current.click()}><MdImage/><span>Photos</span></div>
            <div className="i video-icon"><MdVideocam/><span>Video</span></div>
            <div className="i location-icon"><MdLocationPin/><span>Location</span></div>
            <div className="i schedule-icon"><MdSchedule/><span>Schedule</span></div>
            <button className="button">Share</button>
            <div style={{display: "none"}}>
              <input type="file" name="MyImage" ref={imageRef} onChange={onImageChange}/>
            </div>
        </div>
        {image && 
          // above statement means if image exist then(represented by &&)
          <div className="previewImage">
            <MdOutlineCancel onClick={()=>setImage(null)}/>
            <img src={image.image} alt="" />
          </div>
        }
    </div>
  )
}
