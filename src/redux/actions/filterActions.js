import { TOGGLE_BRAND, TOGGLE_STOCK } from "../actionTypes"

export const toggleStock = () => {
    return {
        type: TOGGLE_STOCK   
     }
}

export const toggleBrand = (brand) => {
    return {
        type: TOGGLE_BRAND,
        payload: brand
     }
}