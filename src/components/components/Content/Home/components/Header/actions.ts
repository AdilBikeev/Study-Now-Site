import { InferActionsTypes } from '../../../../../store';


/**
 * Action Types
 */
export const TOGGLE_DROP_RIGHT_MENU = 'TOGGLE_DROP_RIGHT_MENU';


/**
 * Action Creators
 */
export const actions = {
    /**
    * При вызове закрывает вкладку меню, если она открыта и открывает в ином случаи
    */
    toggleDropRightMenu: () => ({ type: TOGGLE_DROP_RIGHT_MENU })
}

export type ActionType = InferActionsTypes<typeof actions>;