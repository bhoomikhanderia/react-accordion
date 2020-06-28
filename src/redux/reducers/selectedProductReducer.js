import {
    SELECT_PRODUCT,
    REMOVE_SELECTED_PRODUCT,
  } from '../../constant/actionconstant'
  
  export const INITIAL_STATE = [];
  
  
  const selectedProduct = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
      case SELECT_PRODUCT: {
        return payload;
      }
      case REMOVE_SELECTED_PRODUCT: {
        return null;
      }
      default: return null;
    }
  }
  
  export default selectedProduct
  