import { TOGGLE_DROP_RIGHT_MENU, ActionType } from "../actions";

let initialStateHeader = {
    isOpen: false,
    title: 'Study-Now'
};

export const headerReducer = (state = initialStateHeader, action: ActionType): initialStateHeaderType => {
    switch (action.type) {
        case TOGGLE_DROP_RIGHT_MENU:
            let copyState = { ...state };
            copyState.isOpen = !copyState.isOpen;
            return copyState;
        default:
            return state;
    }
};


export type initialStateHeaderType = typeof initialStateHeader;