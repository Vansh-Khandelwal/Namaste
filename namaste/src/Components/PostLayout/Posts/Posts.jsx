import React from 'react'
import Post from '../Post/Post'
import './Posts.css'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import { getTimeline } from '../../../Actions/PostActions/postActions.js'

// import {posts} from '../../../Data/Posts.js'

const Posts = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTimeline(user._id))
  },[])

  const {user} =  useSelector((state)=> state.authReducer.authData)
  const {posts, loading} = useSelector((state)=> state.postReducer)

  
  return (
    <div className="Posts">
      {
        // console.log(posts)
        loading ? "Fetching data...":
        posts.map((post, id)=>{
          return(<Post data={post} id={id} key={id}/>)
        })
      }
    </div>
  )
}

export default Posts
