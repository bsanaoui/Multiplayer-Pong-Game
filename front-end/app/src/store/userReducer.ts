import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { reqUserAuth } from '../requests/user';

export interface UserState {
    login: string,
    username: string,
    avatar?: string,
}

const initialState: UserState = {
    username: '',
    login: '',
    avatar: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        initUser: (state) => {
            const login = localStorage.getItem("login");
            if (!login) {
                // reqUserAuth().then((value) => {
                //     const data = value as UserState;
                //     localStorage.setItem("login", data.login);
                //     localStorage.setItem("username", data.username);
                //     localStorage.setItem("avatar", data.avatar as string);

                // })
                localStorage.setItem("login", "bsanaoui");
                localStorage.setItem("username", "Cmos");
                localStorage.setItem("avatar", "/test.png");
            }
            state.login = localStorage.getItem("login") as string;
            state.username = localStorage.getItem("username") as string;
            state.avatar = localStorage.getItem("avatar") as string;
        },

        // Change UserState
        changeUser: (state, action: PayloadAction<{ username?: string, avatar?: string }>) => {
            if (typeof action.payload.username !== undefined) {
                localStorage.setItem("username", action.payload.username as string);
                state.username = action.payload.username as string;
            }
            if (typeof action.payload.avatar !== undefined) {
                localStorage.setItem("avatar", action.payload.avatar as string);
                state.avatar = action.payload.avatar;
            }
        },

        clearUser: (state) => {
            localStorage.clear();
            state.login = '';
            state.avatar = '';
            state.username = '';
        },
        // Clear UserState
    }
})

export const { initUser, changeUser, clearUser } = userSlice.actions

export default userSlice.reducer