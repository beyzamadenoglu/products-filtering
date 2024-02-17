import { SET_PRODUCTS, FILTER_PRODUCTS } from '../Constants/actionTypes';

const initialState = {
  products: [],
  filteredProducts: [],
};

const productReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
      };
    case FILTER_PRODUCTS:
      return {
        ...state,
        filteredProducts: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
