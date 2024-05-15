import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import './Profile_card.css'

const Profile_card = ({ ProfilePage }) => {

  const { user } = useSelector((state) => state.authReducer.authData)
  let { posts } = useSelector((state) => state.postReducer)

  const params = useParams()

  if (params.id) {
    posts = posts.filter((post => post.userId === params.id))
  }

  // const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <>
      <div className='profile-card' style={ProfilePage ? { marginTop: 0 } : {}}>

        <div className="profile-images">
          <img src={user.CoverImg ? user.CoverImg.url : 'https://res.cloudinary.com/drvbnhsxg/image/upload/v1714809689/cover/DefaultCover_bwgdk4.png'} alt="cover_image" />
          <img src={user.ProfileImg ? user.ProfileImg.url : 'https://res.cloudinary.com/drvbnhsxg/image/upload/v1714810023/profile/DefaultProfile_o4oqbk.jpg'} alt="display_image" />
        </div>

        <div className="profile-about">
          <div className="profile-name">{user.Firstname} {user.Lastname}</div>
          <div className="profile-description">{user.WorksAt ? user.WorksAt : "Write About Yourself"}</div>
        </div>

        <div className="follow-status">
          <hr />
          <div className='f-status'>
            <div className="statusInfo followers">
              <span className="num-followers bold">{user.Followers.length}</span>
              <span className="gray">Followers</span>
            </div>

            <div className="statusInfo followings">
              <span className="num-following bold">{user.Following.length}</span>
              <span className="gray">Following</span>
            </div>

            {ProfilePage && (
              <>
                <div className="statusInfo posts">
                  <span className="num-posts bold">{posts.length}</span>
                  <span className="gray">Posts</span>
                </div>
              </>
            )}
          </div>
          <hr />
          {ProfilePage && (<div style={{ margin: "5px" }}></div>)}
        </div>

        {ProfilePage ? "" :
          <Link to={`/profile/${user._id}`} style={{ textDecoration: "none" }}>
            <div className="profile-link">
              My Profile
            </div>
          </Link>
        }

      </div>
    </>
  )
}

export default Profile_card