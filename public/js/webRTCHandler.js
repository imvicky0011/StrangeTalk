import * as wss from './wss.js'

export const sendPreOffer = (calleePersonalCode, callType, socket) => {
    console.log("Sending the pre offer to the other client, with their personal code mentioned in this data")
    const data = {
        callType,
        calleePersonalCode
    }

    wss.sendPreOffer(socket, data)
}

export const handlePreOffer = (data) => {
    console.log(data)
}