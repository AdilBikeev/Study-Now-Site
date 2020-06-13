import { InferActionsTypes } from '../../../store';


/**
 * Action Creators
 */
export const actions = {
    toggleDropRightMenu: () => ({ type: '' })
}

export type ActionType = InferActionsTypes<typeof actions>;