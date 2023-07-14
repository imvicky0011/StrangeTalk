const express = require('express')
const http = require('http')

const PORT = process.env.PORT || 3000

const app = express()
const server = http.createServer(app)
const io = require("socket.io")(server)

//making all the files in the public folder to be accessible from the outside
app.use(express.static("public"))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

let connectedPeers = []


io.on("connection", (socket) => {
    connectedPeers.push(socket.id)
    console.log(connectedPeers)

    //socker server recieving the pre offer from the callee.
    socket.on("pre-offer", (data) => {
        console.log("pre-offer-came")
        console.log(data)
    
        const {calleePersonalCode, callType} = data


        const connectedPeer = connectedPeers.filter((peerSocketId) => {
            peerSocketId === calleePersonalCode
        })
        console.log(connectedPeer)
        console.log(connectedPeers)

        if(connectedPeer) {
            const data = {
                callerSocketId: socket.id,
                callType
            }
            console.log("Sending the received pre-offer to the callee")
            io.to(calleePersonalCode).emit("pre-offer", data);
        }
    })

    socket.on('disconnect', () => {
        console.log(`User ${socket.id} disconnected!`)

        const newConnectedPeers = connectedPeers.filter(peer => peer !== socket.id)
        connectedPeers = newConnectedPeers
        console.log(connectedPeers)
    })
})

server.listen(PORT, () => {
    console.log("Server listening to the PORT 3000")
})