import React from 'react'
import Post from '../Post/Post'
import './Posts.css'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import { useEffect } from 'react'
import { getTimeline } from '../../../Actions/PostActions/postActions.js'

const Posts = () => {

  const dispatch = useDispatch()
  const params = useParams()

  useEffect(() => {
    dispatch(getTimeline(user._id))
  },[])

  const {user} =  useSelector((state)=> state.authReducer.authData)
  let {posts, loading} = useSelector((state)=> state.postReducer)

  if (!posts)
  {
    return "No Posts"
  }

  if (params.id)
  {
    posts = posts.filter((post=> post.userId === params.id))
  }

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
