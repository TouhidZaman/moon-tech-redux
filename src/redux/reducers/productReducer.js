import { DECREMENT, INCREMENT } from "../actionTypes"

const initialState = {
    counter: 0
}

export const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case DECREMENT:
            return {
                ...state,
                counter: state.counter? state.counter - 1 : 0
            }
        default: 
            return state
    }
}