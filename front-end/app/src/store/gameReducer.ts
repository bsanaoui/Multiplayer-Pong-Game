import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum ModeEnum {
    mode1,
    mode2,
    mode3,
    default,
}

export interface ModeState {
    mode: ModeEnum,
    dialogIsOpen: boolean,
    is_game_set: boolean,
    room:string,
}

const initialState: ModeState = {
    mode: ModeEnum.default,
    dialogIsOpen: false,
    is_game_set: false,
    room:"",
}

export const GameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setModeGame: (state, action: PayloadAction<{mode:ModeEnum, room?:string}>) => {
            state.mode = action.payload.mode;
            state.dialogIsOpen = false;
            state.is_game_set = true;
            state.room = action.payload.room as string;
        },

        finishGame: (state) => {
            state.is_game_set = false;
        },
        HandleCloseDialog: (state) => {
            state.dialogIsOpen = false;
        },
        HandleOpeneDialog: (state) => {
            state.dialogIsOpen = true;
        },
    }
})

export const { setModeGame, HandleCloseDialog, HandleOpeneDialog,finishGame } = GameSlice.actions

export default GameSlice.reducer