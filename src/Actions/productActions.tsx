import {
  SET_PRODUCTS,
  FILTER_PRODUCTS,
  SET_SORT_FILTER,
  SET_RANGE_FILTER,
  SET_CATEGORIES_FILTER,
  SET_BRANDS_FILTER,
  SET_SEARCH_TERM,
  CLEAR_FILTERS
} from '../Constants/actionTypes.tsx';
import { Product, SortOption, RangeOption, } from '../types';

export const setProducts = (products: Product[]) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const filterProducts = (filteredProducts: Product[]) => ({
  type: FILTER_PRODUCTS,
  payload: filteredProducts,
});

export const setSortFilter = (sortOption: SortOption) => ({
  type: SET_SORT_FILTER,
  payload: sortOption,
});

export const setRangeFilter = (rangeOption: RangeOption) => ({
  type: SET_RANGE_FILTER,
  payload: rangeOption,
});

export const setCategoriesFilter = (categoriesOptions: string[]) => ({
  type: SET_CATEGORIES_FILTER,
  payload: categoriesOptions,
});

export const setBrandsFilter = (brandsOptions: string[]) => ({
  type: SET_BRANDS_FILTER,
  payload: brandsOptions,
});

export const setSearchTerm = (searchTerm: string) => ({
  type: SET_SEARCH_TERM,
  payload: searchTerm,
});

export const clearFilters = () => {
  return {
    type: CLEAR_FILTERS,
  };
};

