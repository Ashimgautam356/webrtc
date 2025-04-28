import React, { useEffect, useState } from 'react'
import {useSocket} from '../providers/Socket'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {

    const homePage ={height:'100vh', width:'100vw', display:"flex", justifyContent:"center", alignItems:"center"}
    const inputStyle={display:'flex', flexDirection:'column', padding:'4rem'} 
    const insideHomePage ={padding:'1rem', margin:"1rem"}

    const {socket} = useSocket();

    const [email, setEmail] = useState("")
    const [roomId, setRoomId] = useState("")
    const navigate = useNavigate()

    const handleRoomJoined = ({roomId})=>{
      
      navigate(`/room/${roomId}`)
      
    }

    useEffect(()=>{
      socket.on("joined-room",handleRoomJoined)
    },[socket])
   
    const  handleJoinRoom = ()=>{

      socket.emit('join-room',{emailId:email, roomId: roomId})

    }

  return (
    <div style={homePage}>
        
        <div style={inputStyle}>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='example123@gmail.com' style={insideHomePage}/>
            <input type="text" value={roomId} placeholder='Enter room code' onChange={(e)=>setRoomId(e.target.value)} style={insideHomePage}/>
            <button onClick={handleJoinRoom}>Enter</button>
        </div>

    </div>
  )
}

export default LandingPage