import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger"; //Middleware
import thunk from "redux-thunk"; //Middleware

import cartDateTime from "./middlewares/cartDateTime"; //Custom Middleware
import rootReducer from "./reducers/rootReducer";

const store = createStore(
    rootReducer, 
    composeWithDevTools(
        applyMiddleware(
            cartDateTime,
            thunk,
            logger
        )
    )
)

export default store;