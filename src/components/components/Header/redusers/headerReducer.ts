import { ActionType } from "../actions";

let initialStateHeader = {
    isOpen: false,
    title: 'Study-Now'
};

export const headerReducer = (state = initialStateHeader, action: ActionType): initialStateHeaderType => {
    switch (action.type) {
        default:
            return state;
    }
};


export type initialStateHeaderType = typeof initialStateHeader;