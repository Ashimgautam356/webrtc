import React, { useCallback, useEffect } from 'react'
import { useSocket } from '../providers/Socket'
import {usePeer} from '../providers/Peer'

const Room = () => {
    const { socket } = useSocket()
    const {peer, createOffer} = usePeer()

    const handleJoinedUsers = useCallback(
        async (data)=>{
            const {emailId} = data
            console.log(emailId)
            const offer = await createOffer()
            socket.emit( 'call-user',{emailId, offer})
        },
        [createOffer,socket]
    )

    const handleIncomingCall = useCallback((data)=>{
        const {from, offer} = data
        console.log("incoming call from ", from, offer)
    },[])

    useEffect(( )=>{
        socket.on("user-joined", handleJoinedUsers)
        socket.on('incoming-call',handleIncomingCall)
    },[socket])


  return (
    <div>Room</div>
  )
}

export default Room