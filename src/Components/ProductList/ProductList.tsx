/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProductCard from '../Product/ProductCard.tsx';
import './ProductList.scss';
import CustomSearch from '../Search/CustomSearch.tsx'
import { filterProducts, clearFilters } from '../../Actions/productActions.tsx';

interface Product {
  id: number;
  title: string;
  images: string[];
  price: string;
  category: string;
  brand: string;
}

const ProductList: React.FC = () => {

  const { products }: { products: any } = useSelector((state: any) => state.products);
  const { filteredProducts }: { filteredProducts: any } = useSelector((state: any) => state.products);

  const { sortFilter }: { sortFilter: any } = useSelector((state: any) => state.products);
  const { rangeFilter }: { rangeFilter: any } = useSelector((state: any) => state.products);
  const { categoriesFilter }: { categoriesFilter: any } = useSelector((state: any) => state.products);
  const { brandsFilter }: { brandsFilter: any } = useSelector((state: any) => state.products);
  const { searchTerm }: { searchTerm: string } = useSelector((state: any) => state.products);


  const dispatch = useDispatch();

  const filterByPrice = () => {
    let prods = [...filteredProducts];
    if (sortFilter === 'price_asc') {
      prods.sort((a: Product, b: Product) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sortFilter === 'price_desc') {
      prods.sort((a: Product, b: Product) => parseFloat(b.price) - parseFloat(a.price));
    }
    dispatch(filterProducts(prods));
  };
  
  const applyFilters = () => {
    if (!products || products.length === 0) return;
    
    let prods = [...products.products];
  
    if (searchTerm.trim() !== '') {
      prods = prods.filter((product: Product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  
    if (Array.isArray(categoriesFilter) && categoriesFilter.length > 0) {
      prods = prods.filter((product: Product) =>
        categoriesFilter.includes(product.category)
      );
    }
  
    if (Array.isArray(brandsFilter) && brandsFilter.length > 0) {
      prods = prods.filter((product: Product) =>
        brandsFilter.includes(product.brand)
      );
    }
  
    const [minPrice, maxPrice] = rangeFilter;
    if (minPrice !== null && maxPrice !== null) {
      prods = prods.filter((product: Product) => {
        const price = parseFloat(product.price);
        return price >= minPrice && price <= maxPrice;
      });
    }
  
    dispatch(filterProducts(prods));
  };
  
  
  useEffect(() => {
    filterByPrice();
  }, [sortFilter]);
  
  useEffect(() => {
    applyFilters();
  }, [products, categoriesFilter, rangeFilter, brandsFilter]);

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      dispatch(clearFilters());
      const filtered = products.products.filter((product: Product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      dispatch(filterProducts(filtered));
    }
  }, [searchTerm, products]);

  return (
    <div className="product-list">
      <div className="search-wrapper">
        <CustomSearch />
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-2 p-4">
        {filteredProducts?.length ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="col mb-4">
              <ProductCard
                name={product.title}
                image={product.images[0]}
                price={product.price}
              />
            </div>
          ))
        ) : (
          <div className="no-data-message">
            <p>No data available</p>
          </div>
        )}
      </div>
    </div>
  );
  
};

export default ProductList