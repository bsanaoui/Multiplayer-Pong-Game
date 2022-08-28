import { combineReducers } from "@reduxjs/toolkit";

import chatReducer from "./chatReducer";
import currentUserReducer from "./currentUserReducer";

const reducers = combineReducers({
    chat: chatReducer,
    currentUser: currentUserReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>
