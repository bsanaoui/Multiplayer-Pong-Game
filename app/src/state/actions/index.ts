import { ActionType } from "../action-types"

interface UpdateAction {
    type: ActionType.UPDATE,
    payload: boolean
}

interface RemoveAction {
    type: ActionType.REMOVE,
    payload: boolean
}

export type Action = UpdateAction | RemoveAction