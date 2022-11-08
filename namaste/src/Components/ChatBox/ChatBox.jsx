import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import { getUser } from '../../Api/UserRequest.js'

const ChatBox = ({chat, currentUser}) => {

    const [userData, setUserData] = useState(null)

    useEffect(()=>{
        const userId = chat?.members?.find((id)=> id!==currentUser)
        
        const getUserData = async() => {
            try {
                const {data} = await getUser(userId)
                setUserData(data)
                
            } catch (error) {
                console.log(error)
            }
        }
        if(chat!==null)
        {getUserData()}
    }, [chat, currentUser])

    return (
        <>
            <div className="ChatBox-container">
                <>
                <div className="chat-header">
                    <div className="follower">

                        <div>
                            <img src={userData?.ProfileImg? 
                                process.env.REACT_APP_PUBLIC_FOLDER + userData.ProfileImg:
                                process.env.REACT_APP_PUBLIC_FOLDER + 'DefaultProfile.jpg' } alt="" className='prof-image' style={{width: '50px', height: '50px'}}/>
                            <div className="chat-name" style={{fonstSize: "0.8rem"}}>
                                <span className="prof-name">{userData?.Firstname} {userData?.Lastname}</span>
                            </div>
                        </div>
                        <hr style={{width: "85%", border: "0.1px solid #ececec"}}/>

                    </div>
                </div>
                </>
            </div>
        </>
    )
}

export default ChatBox