import { configureStore } from '@reduxjs/toolkit'
import chatReducer from './chatUiReducer'
import userReducer  from './userReducer'

export const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
