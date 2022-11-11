import {format} from 'timeago.js'
// to find the difference when the message was sent and current time
import InputEmoji from 'react-input-emoji'
// to add emoji inputs

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import { getUser } from '../../Api/UserRequest.js'
import { getMessages } from '../../Api/MessageRequest.js'

import './ChatBox.css'

const ChatBox = ({chat, currentUser}) => {

    const [userData, setUserData] = useState(null)
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState("")

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

    useEffect(()=> {
        
        const fetchMessages = async() => {
            try {
                const {data} = await getMessages(chat._id)
                console.log(data)
                setMessages(data)

            } catch (error) {
                console.log(error)
            }
        }

        if(chat!==null)
        {fetchMessages()}
    })

    const handleChange = (newMessage) => {
        setNewMessage(newMessage)
    }

    return (
        <>
            <div className="ChatBox-container">
                { chat? (
                    <>
                        <div className="chat-header">
                            <div className="Chatbox">

                                <div>
                                    <img src={userData?.ProfileImg? 
                                        process.env.REACT_APP_PUBLIC_FOLDER + userData.ProfileImg:
                                        process.env.REACT_APP_PUBLIC_FOLDER + 'DefaultProfile.jpg' } alt="" className='prof-image' style={{width: '50px', height: '50px'}}/>
                                    <div className="chat-name" style={{fonstSize: "0.8rem"}}>
                                        <span className="prof-name">{userData?.Firstname} {userData?.Lastname}</span>
                                    </div>
                                </div>
                                <hr style={{width: "85%", border: "0.1px solid #ececec"}}/>

                                {/* Messages */}

                                <div className="chat-body">
                                    {messages.map((message, id)=>(
                                        <>
                                            <div className={message.senderId === currentUser? "message own": "message"}>
                                                <span>{message.text}</span>
                                                <span>{format(message.createdAt)}</span>
                                            </div>
                                        </>
                                    ))}
                                </div>

                                {/* Char sender */}

                                <div className="chat-sender">
                                    <div>+</div>
                                    <InputEmoji value = {newMessage} onChange = {handleChange} />
                                    <div className="send-button button">Send</div>
                                </div>

                            </div>
                        </div>
                    </>
                ): (
                    <span className="chatbox-empty-message">
                        Tap on a chat to start a conversation...
                    </span>
                )}
            </div>
        </>
    )
}

export default ChatBox