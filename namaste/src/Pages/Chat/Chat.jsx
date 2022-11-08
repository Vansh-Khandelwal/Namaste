import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import { userChats } from '../../Api/ChatRequest.js'
import Conversation from '../../Components/Conversation/Conversation.jsx'
import Search from '../../Components/Profile/Search/Search'
import './Chat.css'

export const Chat = () => {

    const {user} = useSelector((state)=>state.authReducer.authData)

    const [chats, setChats] = useState([])

    useEffect(()=> {
        const getChats = async() => {
            try {
                const {data} = await userChats(user._id)
                setChats(data)
                console.log(data)
                
            } catch (error) {
                console.log(error)
            }
        }

        getChats()
    }, [user])

    return (
        <div className="Chat">

            {/* Left Side */}
            <div className="Left-side-chat">
                <Search/>
                <div className="Chat-container">
                    <h2>Chats</h2>
                    <div className="Chat-list">
                        {chats.map((chat, id)=>(
                            <div key={id}>
                                <Conversation data={chat} currentUserId={user._id} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right side */}
            <div className="Right-side-chat">

            </div>
        </div>
    )
}
