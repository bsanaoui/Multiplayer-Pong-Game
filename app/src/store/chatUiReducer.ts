import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ChatUIState {
    is_friend: boolean,
    curr_converation: string,
    curr_room: string
}

const initialState: ChatUIState = {
    is_friend: true,
    curr_converation: '',
    curr_room: ''
}

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        changeStatusFriends: (state, action: PayloadAction<boolean>) => {
            state.is_friend = action.payload
        },

        changeCurrRoom: (state, action: PayloadAction<string>) => {
            state.curr_room = action.payload
        },

        changeCurrConversation: (state, action: PayloadAction<string>) => {
            state.curr_converation = action.payload
        },
    }
})

export const {changeStatusFriends, changeCurrRoom, changeCurrConversation} = chatSlice.actions

export default chatSlice.reducer