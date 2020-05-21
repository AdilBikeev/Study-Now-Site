import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import appReducer from './reducers/appReducer'
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
    appPage: appReducer
});

const composeEnhancers = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;//window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
