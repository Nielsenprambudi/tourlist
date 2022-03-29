import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import ConfigReducers from "./reducers/ConfigReducers";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import {persistStore, persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";


const rootReducer = combineReducers({
    config: ConfigReducers
    // config: null
});

const persistConfig = {
    key: "tourlist",
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);


export default () => {
    const store = createStore(
      persistedReducer,
      applyMiddleware(promiseMiddleware, logger),
    );
    const persistor = persistStore(store);
    return {store, persistor};
  };