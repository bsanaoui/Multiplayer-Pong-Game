import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { stat } from 'fs';
import { boolean } from 'yup';
import { reqUserAuth } from '../requests/user';

export interface UserState {
    login: string,
    username: string,
    avatar?: string,
    connection:boolean,
}

const initialState: UserState = {
    username: '',
    login: '',
    avatar: '',
    connection:false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        initUser: (state, action: PayloadAction<{ login:string, username: string, avatar: string }>) => {        
            state.login = action.payload.login;
            state.username = action.payload.username;
            state.avatar = action.payload.avatar;
        },

        // Change UserState
        changeUser: (state, action: PayloadAction<{ username?: string, avatar?: string }>) => {
            if (typeof action.payload.username !== undefined) 
                state.username = action.payload.username as string;

            if (typeof action.payload.avatar !== undefined) 
                state.avatar = action.payload.avatar;
        },

        clearUser: (state) => {
            state.login = '';
            state.avatar = '';
            state.username = '';
        },
        // Clear UserState

        handleConnectionStatus:(state) => {
            state.connection = !state.connection;
        }
    }
})

export const { initUser, changeUser, clearUser,handleConnectionStatus} = userSlice.actions

export default userSlice.reducer