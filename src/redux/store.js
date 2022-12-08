import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import cartDateTime from "./middlewares/cartDateTime";
import rootReducer from "./reducers/rootReducer";

const store = createStore(
    rootReducer, 
    composeWithDevTools(
        applyMiddleware(
            cartDateTime,
            //we can add more middleware's here separated by comma
        )
    )
)

export default store;