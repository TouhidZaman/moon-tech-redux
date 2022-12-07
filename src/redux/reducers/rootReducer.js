import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { productReducer } from "./productReducer";

//need to pass reducers as a object in combineReducers
const rootReducer = combineReducers({
    productReducer,
    filterReducer
})

export default rootReducer;