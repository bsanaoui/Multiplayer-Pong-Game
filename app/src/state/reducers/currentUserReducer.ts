import { ActionType } from "../action-types";
import { Action } from "../actions/index";

const initialState:string = '';

const reducer = (state: string = initialState, action: Action) => {
    switch (action.type){
        case ActionType.UPDATE:
            return action.payload;
        default:
            return state;
    }
}

export default reducer