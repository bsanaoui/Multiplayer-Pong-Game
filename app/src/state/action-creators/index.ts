import { Dispatch } from "react"
import { ActionType } from "../action-types"
import { Action } from "../actions"

// Actions Creators For Status IsFriend component
export const changeStatusFriends = (is_friends: boolean) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.UPDATE,
            payload: is_friends
        })
    }
}


// Actions Creators For Status Username
export const setUsername = (username: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.UPDATE,
            payload: username
        })
    }
}

