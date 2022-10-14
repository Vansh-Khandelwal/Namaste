import React, { useState } from 'react'
import './Post.css'

import {RiHeartFill, RiHeartLine, RiShareForwardLine} from 'react-icons/ri'
import {FaRegCommentDots} from 'react-icons/fa'
import { useSelector } from 'react-redux'

const Post = ({data}) => {

  const {user} = useSelector((state)=>state.authReducer.authData)

  const [liked, setLiked] = useState(data.likes.includes(user._id))
  const [likes, setLikes] = useState(data.likes.length)

  return (
    <div className="Post">
      
        <img src={data.img? process.env.REACT_APP_PUBLIC_FOLDER + data.image : "" } alt="post_image" className="Post-Image"/>

        <div className="postReactions">
            <div style={{cursor: "pointer"}}>{liked?<RiHeartFill/>:<RiHeartLine/>}</div>
            <FaRegCommentDots/>
            <RiShareForwardLine/>
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