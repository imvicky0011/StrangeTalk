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

io.on("connection", (socket) => {
    console.log("A user connected to the socket.io server")
    console.log(socket.id)
})

server.listen(PORT, () => {
    console.log("Server listening to the PORT 3000")
})