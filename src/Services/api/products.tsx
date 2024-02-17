import axios, { AxiosResponse } from 'axios';
import { products } from './endpoints.tsx';

const getAllProducts = async (): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await axios.get(products);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export default getAllProducts;
