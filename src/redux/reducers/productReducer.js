import { ADD_TO_CART } from "../actionTypes"

const initialState = {
    cart: []
}

export const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            const newCart = [...state.cart]
            const index = state.cart.map(product => product._id).indexOf(action.payload._id);
            if(index !== -1) {
                newCart[index].quantity = newCart[index].quantity + 1;
                return {
                    ...state,
                    cart: newCart
                }
            }
            newCart.push({...action.payload, quantity: 1})
            return {
                ...state,
                cart: newCart
            }
        default: 
            return state
    }
}