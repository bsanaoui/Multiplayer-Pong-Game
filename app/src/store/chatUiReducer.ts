import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface MessageState {
    username: string,
    msg: string
};

export interface ChatUIState {
    is_friend: boolean,
    curr_converation: string,
    curr_room: string,
    msgs: MessageState[]
}

const initialState: ChatUIState = {
    is_friend: true,
    curr_converation: '',
    curr_room: '',
    msgs:[]

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

        addMessage: (state, action: PayloadAction<MessageState>) => {
            state.msgs.push(action.payload)
        },
    }
})

export const { changeStatusFriends, changeCurrRoom, changeCurrConversation, addMessage } = chatSlice.actions

export default chatSlice.reducer