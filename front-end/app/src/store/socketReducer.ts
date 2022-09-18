import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { io, Socket } from 'socket.io-client';

interface AuthRoom{
    auth: {
        user: string,
        room: string,
    }
}

interface AuthDM{
    auth: {
        from: string,
        to: string,
    }
}

export interface SocketState {
    socket: Socket;
}

const initialState: SocketState = {
    socket: io()
}

export const socketSlice = createSlice({
    name: 'socketclient',
    initialState,
    reducers: {
        initSocketClient (state, action: PayloadAction<{host:string, auth: AuthRoom | AuthDM }>) {
            let socket:Socket = io(action.payload.host, action.payload.auth);
            return ({socket});
        },

        disconnectSocket: (state) => {
            state.socket.disconnect();
        },
    }
})

export const {initSocketClient, disconnectSocket} = socketSlice.actions

export default socketSlice.reducer