import { configureStore } from '@reduxjs/toolkit'
import chatReducer from './chatUiReducer'
import interfacesReducer from './interfacesReducer'
import openDialogReducer from './openDialogReducer'
import userReducer  from './userReducer'

export const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
    openDialog: openDialogReducer,
    interfaces: interfacesReducer, 
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
