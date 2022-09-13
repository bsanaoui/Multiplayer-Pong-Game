import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: {is_open: boolean} = {is_open:false};

export const openDialogSlice = createSlice({
    name: 'openDialog',
    initialState,
    reducers: {
        setOpenDialogRoom: (state, action: PayloadAction<boolean>) => {
            state.is_open = action.payload
        },
    }
})

export const {setOpenDialogRoom} = openDialogSlice.actions

export default openDialogSlice.reducer