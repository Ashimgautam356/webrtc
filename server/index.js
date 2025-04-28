const express = require("express")
const bodyParser = require("body-parser")
const {Server} = require("socket.io")


const io = new Server({
    cors:true,
})
const app = express()
app.use(bodyParser.json())

const users = new Map()

io.on("connection",socket=>{
    // signalling code is wirtten here,
    socket.on('join-room', data=>{
        console.log("new connection ")
        const {roomId, emailId} = data;
        users.set(emailId,socket.id)
        socket.join(roomId)
        socket.emit("joined-room",{roomId})
        socket.broadcast.to(roomId).emit("user-joined",{emailId})
    })
})


app.listen(8000, ()=> console.log("running in 8000 server"))
io.listen(8001)