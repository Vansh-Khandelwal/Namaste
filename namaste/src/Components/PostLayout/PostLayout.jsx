import React from 'react'
import Addpost from './Add-post/Addpost.jsx'
import Posts from './Posts/Posts.jsx'

import './PostLayout.css'

const PostLayout = () => {
  return (
    <div className='postslayout'>
      <Addpost/>
      <Posts/>
    </div>
  )
}

export default PostLayout