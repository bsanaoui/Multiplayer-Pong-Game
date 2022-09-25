import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum ModeEnum {
    mode1,
    mode2,
    default,
}

export interface ModeState {
    mode: ModeEnum,
    dialogIsOpen: boolean,
}

const initialState: ModeState = {
    mode: ModeEnum.default,
    dialogIsOpen: false,
}

export const GameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setModeGame: (state, action: PayloadAction<ModeEnum>) => {
            state.mode = action.payload;
            state.dialogIsOpen = false;
        },
        HandleCloseDialog: (state) => {
            state.dialogIsOpen = false;
        },
        HandleOpeneDialog: (state) => {
            state.dialogIsOpen = true;
        },
    }
})

export const { setModeGame, HandleCloseDialog, HandleOpeneDialog } = GameSlice.actions

export default GameSlice.reducer