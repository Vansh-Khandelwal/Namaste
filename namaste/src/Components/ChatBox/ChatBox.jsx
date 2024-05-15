import {format} from 'timeago.js'
// to find the difference when the message was sent and current time
import InputEmoji from 'react-input-emoji'
// to add emoji inputs

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import { getUser } from '../../Api/UserRequest.js'
import { getMessages, addMessage } from '../../Api/MessageRequest.js'

import './ChatBox.css'
import { useRef } from 'react'

const ChatBox = ({chat, currentUser, setSendMessage, recievedMessage}) => {

    const [userData, setUserData] = useState(null)
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState("")

    const scroll = useRef()
    const imageRef = useRef()

    useEffect(()=> {
        if(recievedMessage!==null && recievedMessage.chatId === chat._id)
        {
            setMessages([...messages, recievedMessage])
        }
    }, [recievedMessage, chat._id, messages])

    useEffect(()=>{

        const userId = chat?.members?.find((id)=> id !== currentUser)
        
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
    },[chat])

    const handleChange = (newMessage) => {
        setNewMessage(newMessage)
    }

    const handleSend = async(e) => {

        e.preventDefault()
        const message = {
            senderId: currentUser,
            text: newMessage, 
            chatId: chat._id
        }

        // send message to database
        try {
            const {data} = await addMessage(message)
            setMessages([...messages, data])
            setNewMessage("")

        } catch (error) {
            console.log(error)
        }

        // send messages to socket server

        const recieverId = chat.members.find((id)=>id!==currentUser)
        setSendMessage({...message, recieverId})
    }

    // scroll to last message

    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: "smooth"})
    }, [messages])

    return (
        <>
            <div className="ChatBox-container">
                { chat? (
                    <>
                        <div className="Chatbox">
                            <div className="chat-header">
                                <img src={userData?.ProfileImg ? userData.ProfileImg.url : 'https://res.cloudinary.com/drvbnhsxg/image/upload/v1714810023/profile/DefaultProfile_o4oqbk.jpg'} alt="" className='prof-image' style={{ width: '50px', height: '50px' }} />
                                <div className="chat-name" style={{ fonstSize: "0.8rem" }}>
                                    <span className="prof-name">{userData?.Firstname} {userData?.Lastname}</span>
                                </div>
                                <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
                            </div>

                            {/* Messages */}

                            <div className="chat-body">
                                {messages.map((message, id) => (
                                    <div ref={scroll} className={message.senderId === currentUser ? "message own" : "message"} key={id}>
                                        <span>{message.text}</span>
                                        <span>{format(message.createdAt)}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Char sender */}

                            <div className="chat-sender">
                                <div onClick={() => imageRef.current.click()}>+</div>
                                <InputEmoji value={newMessage} onChange={handleChange} />
                                <div className="button send-button" onClick={handleSend}>Send</div>
                                <input type="file" name="" id="" style={{ display: "none" }} ref={imageRef} />
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