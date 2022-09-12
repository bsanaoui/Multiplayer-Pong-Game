import { configureStore } from '@reduxjs/toolkit'
import chatReducer from './chatUiReducer'
import collapseNavReducer from './collapseNavReducer'
import interfacesReducer from './interfacesReducer'
import openDialogReducer from './openDialogReducer'
import roomUsersReducer from './roomUsersReducer'
import userReducer  from './userReducer'

export const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
    openDialog: openDialogReducer,
    interfaces: interfacesReducer, 
    collapseNav: collapseNavReducer,
    room_users: roomUsersReducer, 
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
