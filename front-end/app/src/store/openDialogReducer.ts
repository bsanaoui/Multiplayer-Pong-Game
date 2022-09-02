import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: boolean = false;

export const openDialogSlice = createSlice({
    name: 'openDialog',
    initialState,
    reducers: {
        setOpenDialogRoom: (state, action: PayloadAction<boolean>) => {
            state = action.payload
        },
    }
})

export const {setOpenDialogRoom} = openDialogSlice.actions

export default openDialogSlice.reducer