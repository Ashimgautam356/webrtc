import React, { useEffect } from 'react'
import { useSocket } from '../providers/Socket'


const Room = () => {
    const { socket } = useSocket()

    const handleJoinedUsers = (data)=>{
        const {emailId} = data
        console.log(emailId)
        console.log(data)
    }
    useEffect(( )=>{
        socket.io.on("user-joined", handleJoinedUsers)
    },[socket])

    console.log(socket)

  return (
    <div>Room</div>
  )
}

export default Room