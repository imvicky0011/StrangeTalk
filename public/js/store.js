let state = {
    socketId: null,
    localStream: null,
    remoteStream: null,
    screenSharingStream: null,
    allowConnectionsFromStrangers: false,
    screenSharingActive: false
}

export const setSocketId = (socketId) => {
    state = {
        ...state,
        socketId,
    }
}

export const setLocalStream = (stream) => {
    state = {
        ...state,
        localStream: stream
    }
}

export const setAllowConnectionsFromStrangers = (allowConnections) => {
    state = {
        ...state,
        allowConnectionsFromStrangers: allowConnections
    }
}

export const setScreenSharingActive = (screenSharingActive) => {
    state = {
        ...state,
        screenSharingActive
    }
}

export const setScreenSharingStream = (stream) => {
    state = {
        ...state,
        screenSharingStream: stream
    }
}

export const getState = () => {
    return state
}