import { initialStateApp, initialStateAppType } from './../type.d';

export const appReducer = (state = initialStateApp, action: any): initialStateAppType => {
    switch (action.type) {
        default:
            return state;
    }
};