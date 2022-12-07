import { TOGGLE_BRAND, TOGGLE_STOCK } from "../actionTypes";

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

        case TOGGLE_BRAND: 
            const brandAlreadyExist = state.filters.brands.includes(action.payload);
            if(brandAlreadyExist) {
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        brands: state.filters.brands.filter(b => b !== action.payload)
                    }
                }
            }
            return {
                ...state,
                filters: {
                    ...state.filters,
                    brands: [...state.filters.brands, action.payload]
                }
            }

        default:
            return state;
    }
}