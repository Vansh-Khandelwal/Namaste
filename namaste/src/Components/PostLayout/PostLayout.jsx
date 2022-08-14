import React from 'react'
import { Addpost } from './Add-post/Addpost'
import { Posts } from './Posts/Posts'

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