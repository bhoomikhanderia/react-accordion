import { LOAD_PRODUCTS } from '../../constant/actionconstant';

export const loadProducts = (products) => {
    return {
        type: LOAD_PRODUCTS,
        payload: products
    }
}