import { SELECT_PRODUCT } from '../../constant/actionconstant';

export const selectProduct = (selectedProduct) => {
    return {
        type: SELECT_PRODUCT,
        payload: selectedProduct
    }
}