import React, {useState, useRef} from 'react'
import './Addpost.css'
import {useDispatch, useSelector} from 'react-redux';
import {uploadImage} from '../../../Actions/UploadActions/uploadImage.js'

import dp from '../../../images/dp.jpg'

import {MdImage, MdVideocam, MdLocationPin, MdSchedule, MdOutlineCancel} from 'react-icons/md'

const Addpost = () => {

  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const {user} = useSelector((state)=>state.authReducer.authData)

  const  dispatch = useDispatch();
  const desc = useRef();

  const onImageChange = (event)=>{
    if(event.target.files&&event.target.files[0])
    {
      let img = event.target.files[0];
      setImage(img);
    }
  }

  const handleSubmit = (e) => {
      e.preventDefault();

      const newPost = {
        id: user._id,
        desc: desc.current.value
      }

      if(image)
      {
        const data = new FormData()
        const filename = Date.now() + image.name
        data.append("name", filename)
        data.append("file", image)
        newPost.image = filename

        try {
          dispatch(uploadImage(data))
        } catch (error) {
          console.log(error)
        }

      }
      // it is advised to use 3rd party application to store files such as images 
      // 3rd party apps can be AWS, Firebase etc.
      // Here we are using local storage to store those files


  }

  return (
    <div className="Addpost">
        <div className="addpost-input">
            <img src={dp} alt="" className="addpost-prof-image"/>
            <input type="text" className="addpost-caption" placeholder="What's happening?" ref = {desc} required/>
        </div>
        <div className="addpost-options">
            <div className="i image-icon" onClick={()=>imageRef.current.click()}><MdImage/><span>Photos</span></div>
            <div className="i video-icon"><MdVideocam/><span>Video</span></div>
            <div className="i location-icon"><MdLocationPin/><span>Location</span></div>
            <div className="i schedule-icon"><MdSchedule/><span>Schedule</span></div>
            <button className="button" onClick={handleSubmit}>Share</button>
            <div style={{display: "none"}}>
              <input type="file" name="MyImage" ref={imageRef} onChange={onImageChange}/>
            </div>
        </div>
        {image && 
          // above statement means if image exist then(represented by &&)
          <div className="previewImage">
            <MdOutlineCancel onClick={()=>setImage(null)}/>
            <img src={URL.createObjectURL(image)} alt="" />
          </div>
        }
    </div>
  )
}

export default Addpost
