import * as store from './store.js'
import * as ui from './ui.js'


export const registerSocketEvents = (socket) => {

    socket.on("connect", () => {
        console.log("Successfully connected to socket.io server")
        console.log(socket.id)
    
        store.setSocketId(socket.id)
        ui.updatePersonalCode(socket.id)
    })

}