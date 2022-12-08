import { loadProducts } from "../actions/productActions";

const fetchProducts = () => {
    return async (dispatch, getState) => {
        const response = await fetch("http://localhost:5000/products");
        const data = await response.json();
        const products = data.data;
        if(products.length) dispatch(loadProducts(products));
    }
}

export default fetchProducts;