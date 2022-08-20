import { ActionType } from "../action-types";
import { Action } from "../actions/index";

const initialState:boolean = true;


const reducer = (state: boolean = initialState, action: Action) => {
    switch (action.type){
        case ActionType.UPDATE:
            return action.payload;
        case ActionType.REMOVE:
            return action.payload;
        default:
            return state;
    }
}

export default reducer