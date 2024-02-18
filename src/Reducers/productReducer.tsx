import { SET_PRODUCTS, FILTER_PRODUCTS, SET_SORT_FILTER } from '../Constants/actionTypes.tsx';

const initialState = {
  products: [],
  filteredProducts: [],
  sortFilter: ''
};

const productReducer = (state = initialState, action: any) => {
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
    case SET_SORT_FILTER:
      return {
        ...state,
        sortFilter: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
