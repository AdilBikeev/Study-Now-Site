import { appReducer } from './reducers/appReducer';
import { headerReducer } from './components/Content/Home/components/Header/redusers/headerReducer';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunkMiddleware from "redux-thunk";
import { courseReducer } from './components/Content/Course/reducers/courseReducer';

export const rootReducers = combineReducers({
    header: headerReducer,
    course: courseReducer,
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
