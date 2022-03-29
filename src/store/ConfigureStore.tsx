import { createStore, applyMiddleware, combineReducers } from "redux";
import ConfigReducers from "./reducers/ConfigReducers";
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import {persistStore, persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage";


const rootReducer = combineReducers({
    config: ConfigReducers
    // config: null
});

const persistConfig = {
    key: "tourlist",
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = () => {
    const store = createStore(
      persistedReducer,
      applyMiddleware(promiseMiddleware, logger),
    );
    const persistor = persistStore(store);
    return {store, persistor};
  };

  export default store;