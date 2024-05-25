import React, {useState} from 'react'
import './ProfileInfoCard.css'
import { useDispatch } from 'react-redux'
import {useParams} from 'react-router-dom'

import ProfileModal from '../ProfileModal/ProfileModal.jsx'
import * as UserApi from '../../../Api/UserRequest.js'
import { logOut } from '../../../Actions/AuthActions/logOut.js'

import {MdEdit} from 'react-icons/md'
import { useEffect } from 'react'

const ProfileInfoCard = ({ user }) => {

    const [open, setOpen] = useState(false)

    const dispatch = useDispatch()
    const params = useParams()

    // const { user } = useSelector((state) => state.authReducer.authData)

    const profileUserId = params.id ? params.id : user?._id
    const [profileUser, setProfileUser] = useState({})

    useEffect(()=>{
        const fetchprofileUser = async() => {
            if (profileUserId === user?._id) {
                setProfileUser(user)
            } else {
                const profile = await UserApi.getUser(profileUserId)
                setProfileUser(profile)
            }
        }
        fetchprofileUser()
    }, [user, profileUserId])
    // Here if user is not given as dependency the it will render infinite number of times therefore we add user so that it only 
    // renders when user is changed

    const handleLogOut = () => {
        dispatch(logOut())
    }

  return (
      <div className="ProfileInfoCard">

          <div className="Info-head">
              <h3>Profile Info:</h3>
              {
                  user ?
                      user._id === profileUserId ? (
                          <div>
                              <MdEdit style={{ "fontSize": "1.2rem" }} onClick={() => setOpen(true)} />
                              <ProfileModal openEdit={open} setOpenEdit={setOpen} data={user} />
                          </div>
                      ) : ("") : ("")
              }
          </div>

          <div className="Info">
              <span><b>Status</b> </span>
              <span>{profileUser?.Relationship_Status}</span>
          </div>

          <div className="Info">
              <span><b>Lives in</b> </span>
              <span>{profileUser?.LivesIn}</span>
          </div>

          <div className="Info">
              <span><b>Works at/Study in</b> </span>
              <span>{profileUser?.WorksAt}</span>
          </div>

          <button className="button logout-btn" onClick={handleLogOut}>Log out</button>

      </div>
  )
}

export default ProfileInfoCard