import { SET_PRODUCTS, FILTER_PRODUCTS, SET_SORT_FILTER, SET_RANGE_FILTER, SET_CATEGORIES_FILTER, SET_BRANDS_FILTER } from '../Constants/actionTypes.tsx';

const initialState = {
  products: [],
  filteredProducts: [],
  sortFilter: '',
  rangeFilter: [0,2000],
  brandsFilter: []
};

const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload.products,
      };
      case FILTER_PRODUCTS:
        return {
          ...state,
          filteredProducts: [...action.payload],
        };
    case SET_SORT_FILTER:
      return {
        ...state,
        sortFilter: action.payload,
      };
    case SET_RANGE_FILTER:
      return {
        ...state,
        rangeFilter: action.payload,
      };
    case SET_CATEGORIES_FILTER:
      return {
        ...state,
        categoriesFilter: action.payload,
      };
      case SET_BRANDS_FILTER:
      return {
        ...state,
        brandsFilter: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
