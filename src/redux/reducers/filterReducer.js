import { TOGGLE_STOCK } from "../actionTypes";

const initialState = {
    filters: {
        brands: [],
        inStock: false
    }
}

export const filterReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_STOCK: 
            return {
                ...state,
                filters: {
                    ...state.filters,
                    inStock: !state.filters.inStock
                }
            }

        default:
            return state;
    }
}