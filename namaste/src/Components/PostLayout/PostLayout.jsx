import React from 'react'
import { useState, useEffect } from 'react'
import Addpost from './Add-post/Addpost.jsx'
import Posts from './Posts/Posts.jsx'

import { MdCancel } from "react-icons/md";

import './PostLayout.css'

const PostLayout = ({ user }) => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        setVisible(false)
      }, 4000);
    }
  }, [visible])

  return (
    <>
      <div className="alert-info-post" style={visible ? { display: "flex" } : { display: "none" }} onClose={() => setVisible(false)}>
        This feature is not yet added <MdCancel onClick={() => setVisible(false)} />
      </div>
    <div className='postslayout'>
        <Addpost user={user} />
        <Posts user={user} setVisible={setVisible} />
    </div>
    </>
  )
}

export default PostLayout