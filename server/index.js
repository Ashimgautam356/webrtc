const express = require("express")
const bodyParser = require("body-parser")
const {Server} = require("socket.io")


const io = new Server()
const app = express()

app.use(bodyParser.json())

io.on("connection",socket=>{
    // signalling code is wirtten here,

})


app.listen(8000, ()=> console.log("running in 8000 server"))
io.listen(8001)