import React from 'react'
import Post from '../Post/Post'
import './Posts.css'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import { getTimelinePosts } from '../../../Actions/PostActions/postActions.js'

const Posts = () => {

  const dispatch = useDispatch()
  const {user} =  useSelector((state)=> state.authReducer.authData)
  const {posts, loading} = useSelector((state)=> state.postReducer)

  useEffect(() => {
    dispatch(getTimelinePosts(user._id))
  }, [])
  
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
