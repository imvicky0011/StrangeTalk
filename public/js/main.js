import * as store from './store.js'
import * as wss from './wss.js'


//importing the socket.io library
const socket = io('/')

//initializing the connection, creating a open end for the client to connect to and establish the webSocket connection!
wss.registerSocketEvents(socket)


const personalCodeCopyButton = document.getElementById('personal_code_copy_button')

personalCodeCopyButton.addEventListener("click", () => {
    const personalCode = store.getState().socketId;
    console.log("Printing the personal code")
    navigator.clipboard && navigator.clipboard.writeText(personalCode)
})