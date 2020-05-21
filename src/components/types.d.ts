import { StateType, ActionType } from 'typesafe-actions';

/* action.type */
//export module 'RootTypes' {
    /* Главный store */
    export type RootState = StateType<typeof import('./store').default["getState"]>;
//};

/* Action Creators */
//export module 'Root-Types' {
    export interface Types {
        /* Главный ActionCreator */
        RootAction: ActionType<typeof import('./actions').actions>;
    }
//}