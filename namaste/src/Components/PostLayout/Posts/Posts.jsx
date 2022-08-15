import React from 'react'
import './Posts.css'
import {posts} from './Posts.js'

const Posts = () => {
  return (
    <div className="Posts">
      {
        posts.map((post)=>{
          return(
            <div className="post">
              <img src={post.img} alt="" />
              <div className="likes">{post.likes}</div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Posts
