import { appReducer } from './reducers/appReducer';
import { headerReducer } from './components/Header/redusers/headerReducer';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunkMiddleware from "redux-thunk";

export const rootReducers = combineReducers({
    header: headerReducer,
    app: appReducer,
});

export type AppStateType = ReturnType<typeof rootReducers>;

/**
 * Для типизации ActionTypes
 */
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;

/**
 * Для работы Redux DevTools
 */
const composeEnhancers = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;//window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(rootReducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
