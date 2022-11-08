import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Conversation = ({data, currentUserId}) => {

    const [userData, setUserData] = useState(null)

    useEffect(() => {

        const userId = data.members.find((id)=>id!==currentUserId)
        const getUserData = async()=> {

        }
    })

    return (
        <div>Conversation</div>
    )
}

export default Conversation