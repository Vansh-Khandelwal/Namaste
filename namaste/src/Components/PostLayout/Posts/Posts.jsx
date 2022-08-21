import React from 'react'
import Post from '../Post/Post'
import './Posts.css'
import {posts} from '../../../Data/Posts.js'

const Posts = () => {
  return (
    <div className="Posts">
      {
        posts.map((post, id)=>{
          return(<Post data={post} id={id} key={id}/>)
        })
      }
    </div>
  )
}

export default Posts
