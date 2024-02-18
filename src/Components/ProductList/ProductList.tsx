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
  const dispatch = useDispatch();

  const filterProductsList = () => {
    console.log(sortFilter);
    if (!Array.isArray(products.products)) {
      console.error('products.products is not an array');
      return;
    }
  
    let filteredProducts = [...products.products];
    if (sortFilter === 'price_asc') {
      console.log("here");
      filteredProducts.sort((a: Product, b: Product) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sortFilter === 'price_desc') {
      console.log("here no");
      filteredProducts.sort((a: Product, b: Product) => parseFloat(b.price) - parseFloat(a.price));
    }
    console.log(filteredProducts, "prodss");
    dispatch(filterProducts(filteredProducts));
  };
  

  useEffect(() => {
    filterProductsList();
  },[sortFilter])

  useEffect(() => {
   console.log(filteredProducts, "ödmjfngb")
  },[products])


  return (
    <div className="product-list">
      <div className="search-wrapper">
        <CustomSearch />
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-2 p-4">
        { filteredProducts.length && filteredProducts?.map(product => (
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
