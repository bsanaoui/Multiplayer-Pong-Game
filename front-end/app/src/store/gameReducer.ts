import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { string } from 'yup/lib/locale';
import { Player } from '../components/canvas';
import {data} from "../components/DropMenus/DropMenuUser";

export enum ModeEnum {
    mode1,
    mode2,
    mode3,
    default,
}

interface PlayerData{
    p1:Player;
    p2:Player;
}

export interface ModeState {
    mode: ModeEnum,
    dialogIsOpen: boolean,
    is_game_set: boolean,
    room:string,
    players:PlayerData;
    invite_key:string;

    // data_accept:data,
}

const initialState: ModeState = {
    mode: ModeEnum.default,
    dialogIsOpen: false,
    is_game_set: false,
    room:"",
    players:{p1:{} as Player , p2:{} as Player},
    invite_key:'',

    // data_accept:{} as data,
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

        updateScore: (state, action: PayloadAction<{p1:Player, p2:Player}>) => {
            state.players.p1 = action.payload.p1;
            state.players.p2 = action.payload.p2;
        },

        finishGame: (state) => {
            state = initialState;
        },

        playInvitedGame:(state, action: PayloadAction<{key:string, mode:ModeEnum}>) => {
            state.mode=action.payload.mode;
            state.invite_key = action.payload.key;
        },

        HandleCloseDialog: (state) => {
            state.dialogIsOpen = false;
        },
        HandleOpeneDialog: (state) => {
            state.dialogIsOpen = true;
        },
    }
})

export const { setModeGame, HandleCloseDialog, HandleOpeneDialog,finishGame,updateScore,playInvitedGame } = GameSlice.actions

export default GameSlice.reducer