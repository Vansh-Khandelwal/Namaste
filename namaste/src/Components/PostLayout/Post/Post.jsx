import React from 'react'
import {RiHeartFill, RiHeartLine, RiShareForwardLine} from 'react-icons/ri'
import {FaRegCommentDots} from 'react-icons/fa'

const Post = ({data}) => {
  return (
    <div className="Post">
      
        <img src={data.img} alt="post_image" className="Post-Image"/>

        <div className="postReactions">
            {data.liked?<RiHeartFill/>:<RiHeartLine/>}
            <FaRegCommentDots/>
            <RiShareForwardLine/>
        </div>

        <span>{data.likes} Likes</span>

        <div className="Post-detail">
          <span><b>{data.name}</b></span>
          <span> {data.desc}</span>
        </div>

    </div>
  )
}

export default Post