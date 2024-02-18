import {
   SET_PRODUCTS, FILTER_PRODUCTS, SET_SORT_FILTER, SET_RANGE_FILTER, SET_CATEGORIES_FILTER, SET_BRANDS_FILTER, SET_SEARCH_TERM, CLEAR_FILTERS} from '../Constants/actionTypes.tsx';

const initialState = {
  products: [],
  filteredProducts: [],
  sortFilter: '',
  rangeFilter: [0,2000],
  brandsFilter: [],
  searchTerm: '',
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
      case SET_SEARCH_TERM:
        return {
          ...state,
          searchTerm: action.payload,
        };
        case CLEAR_FILTERS:
          return {
            ...state,
            categoriesFilter: [],
            brandsFilter: [],
            rangeFilter: [0, 2000],
          };
    default:
      return state;
  }
};

export default productReducer;
