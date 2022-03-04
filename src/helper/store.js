import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import {register} from '../reducers';


const loggerMiddleware = createLogger();

export const store = createStore(
    register,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);