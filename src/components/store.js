import {createStore, combineReducers, applyMiddleware} from 'redux'
import appReducer from './reducers/appReducer'
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    appPage: appReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));
window.__store__ = store;

export default store;
