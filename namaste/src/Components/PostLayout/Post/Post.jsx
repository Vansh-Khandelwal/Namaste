import React, { useState } from 'react'
import './Post.css'

import {RiHeartFill, RiHeartLine, RiShareForwardLine} from 'react-icons/ri'
import {FaRegCommentDots} from 'react-icons/fa'
import { useSelector } from 'react-redux'

import { likePost } from '../../../Api/PostsRequest'

const Post = ({ data, setVisible }) => {

  const {user} = useSelector((state)=>state.authReducer.authData)
    
  const [liked, setLiked] = useState(data.likes?.includes(user._id))
  const [likes, setLikes] = useState(data.likes?.length)

  const handleLike = () => {
    setLiked((prev)=>!prev)
    likePost(data._id, user._id)
    liked? setLikes((prev) => prev-1) : setLikes((prev) => prev+1)

  }

  // console.log(data)

  return (
    <div className="Post">
      
      <img src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : data.images ? data.images[0].url : ""} alt="post of a user" className="Post-Image" />

      <div className="postReactions">
        <div style={{ cursor: "pointer" }} onClick={handleLike}>{liked ? <RiHeartFill /> : <RiHeartLine />}</div>
        <div onClick={() => setVisible(true)}><FaRegCommentDots /></div>
        <div onClick={() => setVisible(true)}><RiShareForwardLine /></div>
      </div>

      <span className="post-likes">{likes}Likes</span>

      <div className="post-detail">
        <span><b>{data.name}</b></span>
        <span> {data.desc}</span>
      </div>

    </div>
  )
}

export default Post