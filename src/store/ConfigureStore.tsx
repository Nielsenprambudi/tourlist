import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import ConfigReducers from "./reducers/ConfigReducers";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';


const rootReducer = combineReducers({
    config: ConfigReducers
    // config: null
});


const ConfigureStore = () => {
    const store = createStore(
        rootReducer,
        compose(applyMiddleware(promiseMiddleware, logger))
    );
    
    return {store}
}

export default ConfigureStore;