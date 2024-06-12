import React from 'react'
import Post from '../Post/Post'
import './Posts.css'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import { useEffect } from 'react'
import { getTimeline } from '../../../Actions/PostActions/postActions.js'

import Loading from "../../Loading.jsx"

const Posts = ({ user, setVisible }) => {

  const dispatch = useDispatch()
  const params = useParams()
  
  // const {user} =  useSelector((state)=> state.authReducer.authData)
  let { posts, loading, uploading } = useSelector((state) => state.postReducer)

  useEffect(() => {
    dispatch(getTimeline(user._id))
  }, [user, dispatch, user.Following])

  if (!posts)
  {
    return "No Posts"
  }

  if (params.id)
  {
    posts = posts.filter((post)=> post.userId === params.id)
  }

  // console.log(posts)

  return (
    <div className="Posts">
      {
        loading ? <Loading /> : uploading ? <Loading /> :
        posts.map((post, id)=>{
          return (<Post data={post} id={id} key={id} setVisible={setVisible} />)
        })
      }
    </div>
  )
}

export default Posts
