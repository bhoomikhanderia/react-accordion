import {
    LOAD_PRODUCTS,
  } from '../../constant/actionconstant';
  
  export const INITIAL_STATE = [];
  
  const products = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
      case LOAD_PRODUCTS: {
        return payload.categories;
      }
      default: return state;
    }
  }
  
  export default products
  