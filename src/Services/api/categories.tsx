import axios, { AxiosResponse } from 'axios';
import { categories } from './endpoints.tsx';

const getCategories = async (): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await axios.get(categories);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export default getCategories;
