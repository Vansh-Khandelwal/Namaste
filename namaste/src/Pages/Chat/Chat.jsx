import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import { userChats } from '../../Api/ChatRequest.js'
import Conversation from '../../Components/Conversation/Conversation.jsx'
import Navicons from '../../Components/Navicons/Navicons.jsx'

import ChatBox from '../../Components/ChatBox/ChatBox.jsx'
import './Chat.css'

import {io} from 'socket.io-client'
import { useRef } from 'react'

export const Chat = () => {

    const {user} = useSelector((state)=>state.authReducer.authData)

    const [chats, setChats] = useState([])
    const [currentChat, setCurrentChat] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])
    const [sendMessage, setSendMessage] = useState(null)
    const [recieveMessage, setRecieveMessage] = useState(null)

    const socket = useRef()

    // Socket initialization
    useEffect(() => {
        socket.current = io('http://localhost:8800')
        socket.current.emit('new-user-add', user._id)
        socket.current.on('get-users', (users)=> {
            setOnlineUsers(users)
        })
    }, [user])

    // send message to socket server
    useEffect(() => {
        if(sendMessage!==null)
        {
            socket.current.emit('send-message', sendMessage)
        }
    },[sendMessage])

    // recieve message from socket server
    useEffect(()=> {
        socket.current.on('recieve-message', (data)=>{
            setRecieveMessage(data)
        })
    })

    // fetch messages from backend
    useEffect(() => {
        const getChats = async() => {
            try {
                const {data} = await userChats(user._id)
                setChats(data)
            } catch (error) {
                console.log(error)
            }
        }
        getChats()
    }, [user])

    const checkOnlineStatus = (chat) => {
        const chatMember = chat.members.find((member)=>member!==user._id)
        const online = onlineUsers.find((user)=> user.userId === chatMember)
        return online? true: false
    }

    return (
        <div className="Chat">

            <div className="chat-navicons-small">
                <Navicons />
            </div>

            {/* Left Side */}
            <div className="Left-side-chat">
                <div className="Chat-container">
                    <h2>Chats</h2>
                    <div className="Chat-list">
                        {chats.map((chat, id)=>(
                            <div key={id} onClick={()=>setCurrentChat(chat)}>
                                <Conversation data={chat} currentUserId={user._id} online = {checkOnlineStatus(chat)} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right side */}
            <div className="Right-side-chat">
                <div className="chat-navicons">
                    <Navicons/>
                </div>
                
                {currentChat?<ChatBox chat={currentChat} currentUser={user._id} setSendMessage ={setSendMessage} recievedMessage = {recieveMessage} />:<></>}
                
            </div>
        </div>
    )
}
