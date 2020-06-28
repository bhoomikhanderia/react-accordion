import { combineReducers } from 'redux';
import products from './productReducer';
import selectedProduct from './selectedProductReducer';

const appReducer = combineReducers({
    products,
    selectedProduct
})

export default appReducer