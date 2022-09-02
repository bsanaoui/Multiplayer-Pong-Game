import { configureStore } from '@reduxjs/toolkit'
import chatReducer from './chatUiReducer'
import openDialogReducer from './openDialogReducer'
import userReducer  from './userReducer'

export const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
    openDialog: openDialogReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
