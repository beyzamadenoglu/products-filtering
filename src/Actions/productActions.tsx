import { SET_PRODUCTS, FILTER_PRODUCTS } from '../Constants/actionTypes';
import { Product } from '../types';

export const setProducts = (products: Product[]) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const filterProducts = (filteredProducts: Product[]) => ({
  type: FILTER_PRODUCTS,
  payload: filteredProducts,
});
