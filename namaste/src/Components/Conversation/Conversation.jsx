import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import {getUser} from '../../Api/UserRequest.js'

const Conversation = ({data, currentUserId, online}) => {

    const [userData, setUserData] = useState(null)

    useEffect(() => {

        const userId = data.members.find((id)=>id!==currentUserId)

        const getUserData = async()=> {

            try {
                const {data} = await getUser(userId)
                setUserData(data)
            } catch (error) {
                console.log(error)
            }

        }
        getUserData()
    }, [data, currentUserId])

    return (
        <>
            <div className="conversation">
                <div>
                    {online && <div className="online-dot"></div>}

                    <img src={userData?.ProfileImg && userData.ProfileImg.url ? userData.ProfileImg.url : 'https://res.cloudinary.com/drvbnhsxg/image/upload/v1714810023/profile/DefaultProfile_o4oqbk.jpg'} alt="" className="prof-image" style={{ width: '50px', height: '50px' }} />
                    <div className="chat-name" style={{fonstSize: "0.8rem"}}>
                        <span className="prof-name">{userData?.Firstname} {userData?.Lastname}</span>
                        <span>{online? "Online": "Offline"}</span>
                    </div>
                </div>
            </div>
            <hr style={{width: "85%", border: "0.1px solid #ececec"}}/>
        </>
    )
}

export default Conversation