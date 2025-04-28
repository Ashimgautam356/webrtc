const express = require("express")
const bodyParser = require("body-parser")
const {Server} = require("socket.io")


const io = new Server({
    cors:true,
})
const app = express()
app.use(bodyParser.json())

// emailtosocketmapping
const users = new Map()
const sockettoEmailMapping = new Map()

io.on("connection",socket=>{
    // signalling code is wirtten here,
    socket.on('join-room', data=>{
        console.log("new connection ")

        const {roomId, emailId} = data;
        users.set(emailId,socket.id)
        sockettoEmailMapping.set(socket.id, emailId)
        socket.join(roomId)
        socket.emit("joined-room",{roomId})

        console.log("emailId: ", emailId, "roomId: ", roomId , "joined")

        socket.broadcast.to(roomId).emit("user-joined",{emailId})
    })

    socket.on("call-user",(data)=>{
        const {emailId, offer} = data; 
        const fromEmail  = sockettoEmailMapping.get(socket.id)
        const socketId = users.get(emailId)
        socket.to(socketId).emit("incoming-call",{from:fromEmail,offer})
    })
})


app.listen(8000, ()=> console.log("running in 8000 server"))
io.listen(8001)