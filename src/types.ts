export interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    brand: string;
  }

  export enum SortOption {
    PRICE_ASC = 'price_asc',
    PRICE_DESC = 'price_desc',
  }

  export interface RangeOption {
    min: number;
    max: number;
  }