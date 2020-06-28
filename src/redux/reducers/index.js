import { combineReducers } from 'redux';
import products from './productReducer';

const appReducer = combineReducers({
    products
})

export default appReducer