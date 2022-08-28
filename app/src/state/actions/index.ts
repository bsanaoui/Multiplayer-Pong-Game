import { ActionType } from "../action-types"

//**************************************************** */
interface UpdateActionChat {
    type: ActionType.UPDATE,
    payload: boolean
}

interface RemoveActionChat {
    type: ActionType.REMOVE,
    payload:  boolean
}

interface UpdateActionUsername {
    type: ActionType.UPDATE,
    payload: string
}
// *************************************************** */


export type Action = UpdateActionChat | RemoveActionChat | UpdateActionUsername