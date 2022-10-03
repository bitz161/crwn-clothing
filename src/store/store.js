import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

//logger is like a console.log to show the current state
//middleware is like state enchancer
const middleWares = [logger];
const composedEnhancers = compose(applyMiddleware(...middleWares));

//middlewsares should be the three argument
export const store = createStore(rootReducer, undefined, composedEnhancers);
