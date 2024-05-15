import React, {useState, useRef} from 'react'
import './Addpost.css'
import {useDispatch, useSelector} from 'react-redux';
import { uploadPost } from '../../../Actions/UploadActions/uploadImage.js'

import {MdImage, MdVideocam, MdLocationPin, MdSchedule, MdOutlineCancel} from 'react-icons/md'
import { getTimeline } from '../../../Actions/PostActions/postActions';

const Addpost = ({ user }) => {

  const loading = useSelector((state)=>state.postReducer.uploading)

  const [images, setImages] = useState(null);
  // const [imagesPreview, setImagesPreview] = useState(null);

  const imageRef = useRef();
  // const {user} = useSelector((state)=>state.authReducer.authData)

  // const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

  const  dispatch = useDispatch();
  const desc = useRef();

  const onImageChange = (event)=>{
    // if(event.target.files&&event.target.files[0])
    // {
    //   let img = event.target.files[0];
    //   setImages(img);
    // }
    const files = Array.from(event.target.files);

    setImages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          // setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  }

  const reset = () => {
    setImages(null);
      desc.current.value = ""
  }

  const handleSubmit = (e) => {
      e.preventDefault();

      const newPost = {
        userId: user._id,
        desc: desc.current.value
      }

    if (images) {

      // const data = new FormData()
      // const filename = Date.now() + images.name
      // data.append("name", filename)
      // data.append("file", images)

      // Parsing images to backend
      newPost.images = images

      // try {
      //   dispatch(uploadImage(data))
      // } catch (error) {
      //   console.log(error)
      // }

      // console.log(newPost)

      dispatch(uploadPost(newPost))
      // Added when post timeline was not rerendering after adding a post and was throwing an error
      dispatch(getTimeline(user._id))
      reset()
    }
      // it is advised to use 3rd party application to store files such as images
      // 3rd party apps can be AWS, Firebase etc.
  }

  return (
    <div className="Addpost">
        <div className="addpost-input">
        <img src={user?.ProfileImg?.url ? user.ProfileImg.url : 'https://res.cloudinary.com/drvbnhsxg/image/upload/v1714810023/profile/DefaultProfile_o4oqbk.jpg'} alt="" className="addpost-prof-image" />
            <input type="text" className="addpost-caption" placeholder="What's happening?" ref = {desc} required/>
        </div>
        <div className="addpost-options">
            <div className="i image-icon" onClick={()=>imageRef.current.click()}><MdImage/><span>Photos</span></div>
            <div className="i video-icon"><MdVideocam/><span>Video</span></div>
            <div className="i location-icon"><MdLocationPin/><span>Location</span></div>
            <div className="i schedule-icon"><MdSchedule/><span>Schedule</span></div>

            <button className="button" onClick={handleSubmit} disabled={loading}>{loading? "Uploading...": "Share"}</button>

            <div style={{display: "none"}}>
              <input type="file" name="MyImage" ref={imageRef} onChange={onImageChange}/>
            </div>
        </div>
      {images && 
          // above statement means if image exist then(represented by &&)
          <div className="previewImage">
          <MdOutlineCancel onClick={() => setImages(null)} />
          <img src={images[0]} alt="" />
          </div>
        }
    </div>
  )
}

export default Addpost
