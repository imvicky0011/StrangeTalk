import * as store from './store.js'
import * as wss from './wss.js'
import * as webRTCHandler from './webRTCHandler.js'
import * as constants from './constants.js'

//importing the socket.io library
const socket = io('/')

//initializing the connection, creating a open end for the client to connect to and establish the webSocket connection!
wss.registerSocketEvents(socket)


const personalCodeCopyButton = document.getElementById('personal_code_copy_button')

personalCodeCopyButton.addEventListener("click", () => {
    
    const personalCode = store.getState().socketId;
    
    navigator.clipboard && navigator.clipboard.writeText(personalCode)
})


//register event listeners for connection buttons

const personalCodeChatButton = document.getElementById('personal_code_chat_button')

const personalCodeVideoButton = document.getElementById('personal_code_video_button')

personalCodeChatButton.addEventListener('click', () => {
    console.log('chat button clicked')
    
    const calleePersonalCode = document.getElementById("personal_code_input").value

    const callType = constants.callType.CHAT_PERSONAL_CODE;

    //after getting the personal code of someone you want to talk to,
    //you are trying to send the preOffer to that person.
    //in this function, you will pass callType: representing what type of call it is
    //you own personal code: so that the reciever can contact you if they want to accept your request.
    //and the socket connection itself, using this socket connection, the client function will emit to the server connection
    webRTCHandler.sendPreOffer(calleePersonalCode, callType, socket)
})

personalCodeVideoButton.addEventListener('click', () => {
    console.log('video button clicked')

    const calleePersonalCode = document.getElementById("personal_code_input").value

    const callType = constants.callType.VIDEO_PERSONAL_CODE

    webRTCHandler.sendPreOffer(calleePersonalCode, callType, socket)
})