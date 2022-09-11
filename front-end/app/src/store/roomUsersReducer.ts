import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UserOfRoom {
    id: number,
    username: string,
    avatar: string,
    user_role: string,
};

const initialState: UserOfRoom[] = [];

export const roomUsersSlice = createSlice({
    name: 'roomUsers',
    initialState,
    reducers: {
        addUserRoom: (state, action: PayloadAction<UserOfRoom>) => {
            state.push(action.payload)
        },

        initUsesrRoom: (state, action: PayloadAction<UserOfRoom[]>) => {
            state.length = 0;
            state = action.payload;
        },

        clearUsersRoom: (state) => {
            state.length = 0;
        },
    }
})

export const { addUserRoom, initUsesrRoom, clearUsersRoom } = roomUsersSlice.actions

export default roomUsersSlice.reducer