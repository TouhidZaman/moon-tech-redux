import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes"

const initialState = {
    cart: []
}

export const productReducer = (state = initialState, action) => {
    let newCart = [];
    let index = -1;
    const getProductIndex = (product) => {
        return state.cart.map(p => p._id).indexOf(product._id);
    }

    switch(action.type) {
        case ADD_TO_CART:
            newCart = [...state.cart]
            index = getProductIndex(action.payload)
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
            

        case REMOVE_FROM_CART:
            newCart = [...state.cart]
            index = getProductIndex(action.payload);
            if(index !== -1 && newCart[index].quantity > 1) {
                newCart[index].quantity = newCart[index].quantity - 1;
                return {
                    ...state,
                    cart: newCart
                }
            }
            newCart.splice(index, 1);
            return {
                ...state,
                cart: newCart
            }
            
        default: 
            return state
    }
}