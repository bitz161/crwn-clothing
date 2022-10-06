import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import createSagaMiddleware from "@redux-saga/core";

import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

//don't show the middleware or logger once the system is in production
const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  thunk,
].filter(Boolean);

const composeEnchancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const composedEnhancers = composeEnchancer(applyMiddleware(...middleWares));

//redux-persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

//change the persist query in createStore to the persistedReducer
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

//export the persists
export const persistor = persistStore(store);
