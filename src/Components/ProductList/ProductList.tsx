import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProductCard from '../Product/ProductCard.tsx';
import './ProductList.scss';
import CustomSearch from '../Search/CustomSearch.tsx'
import { filterProducts } from '../../Actions/productActions.tsx';

interface Product {
  id: number;
  title: string;
  images: string[];
  price: string;
}

const ProductList: React.FC = () => {

  const { products }: { products: any } = useSelector((state: any) => state.products);

  const { filteredProducts }: { filteredProducts: any } = useSelector((state: any) => state.products);

  const { sortFilter }: { sortFilter: any } = useSelector((state: any) => state.products);
  const { rangeFilter }: { rangeFilter: any } = useSelector((state: any) => state.products);
  const { categoriesFilter }: { categoriesFilter: any } = useSelector((state: any) => state.products); 

  const dispatch = useDispatch();

  const filterProductsList = () => {
    if (!Array.isArray(filteredProducts)) {
      console.error('filteredProducts is not an array');
      return;
    }
    let prods = [...filteredProducts];
    if (sortFilter === 'price_asc') {
      prods.sort((a: Product, b: Product) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sortFilter === 'price_desc') {
      prods.sort((a: Product, b: Product) => parseFloat(b.price) - parseFloat(a.price));
    }
    // Apply category filter
    if (Array.isArray(categoriesFilter) && categoriesFilter.length > 0) {
      prods = prods.filter((product: Product) =>
        categoriesFilter.includes(product.category)
      );
    }
    dispatch(filterProducts(prods));
  };
  
  const filterRangeProductsList = () => {
    const [minPrice, maxPrice] = rangeFilter;
    let prods = [...filteredProducts];
    if (minPrice !== null && maxPrice !== null) {
      prods = prods.filter((product: Product) => {
        const price = parseFloat(product.price);
        return price >= minPrice && price <= maxPrice;
      });
    }
    // Apply category filter
    if (Array.isArray(categoriesFilter) && categoriesFilter.length > 0) {
      prods = prods.filter((product: Product) =>
        categoriesFilter.includes(product.category)
      );
    }
    dispatch(filterProducts(prods));
  };
  
  useEffect(() => {
    filterProductsList();
  }, [sortFilter, categoriesFilter]);
  
  useEffect(() => {
    filterRangeProductsList();
  }, [rangeFilter, categoriesFilter]);
  
  
  

  useEffect(() => {
    filterProductsList();
  },[sortFilter]);


  useEffect(() => {
    filterRangeProductsList();
  },[rangeFilter]);


  return (
    <div className="product-list">
      <div className="search-wrapper">
        <CustomSearch />
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-2 p-4">
        { filteredProducts?.length && filteredProducts?.map(product => (
          <div key={product.id} className="col mb-4">
            <ProductCard
              name={product.title}
              image={product.images[0]}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
