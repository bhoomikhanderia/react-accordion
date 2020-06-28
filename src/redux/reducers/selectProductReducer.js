import {
    SELECT_PRODUCT
  } from '../../constant/actionconstant'
  
  export const INITIAL_STATE = [];
  
  
  const selectedProduct = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
      case SELECT_PRODUCT: {
        return payload;
      }
      default: return null;
    }
  }
  
  export default selectedProduct
  