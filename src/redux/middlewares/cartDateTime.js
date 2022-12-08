import { ADD_TO_CART } from "../actionTypes";

const cartDateTime = (store) => (next) => (action) => {

    //Injecting something even before dispatching an action
    if(action.type === ADD_TO_CART) {
        const dateTime = new Date();
        const newAction = {
            ...action,
            payload: {...action.payload, dateTime}
        }
        return next(newAction)
    }

    return next(action); //default return
}

export default cartDateTime;