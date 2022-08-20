import { Dispatch } from "react"
import { ActionType } from "../action-types"
import { Action } from "../actions"

export const changeStatus = (is_friends: boolean) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.UPDATE,
            payload: is_friends
        })
    }
}