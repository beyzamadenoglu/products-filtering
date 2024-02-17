import React, { useEffect, useState } from 'react';
import withLayout from '../../Layouts/Layout.tsx';

import getAllProducts from '../../Services/api/products.tsx';
import ProductList from '../../Components/ProductList/ProductList.tsx';


const Home = () => {

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const data = await getAllProducts();
      setProducts(data.products);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  useEffect(() => {
    fetchProducts();
  },[]);

  useEffect(() => {
    console.log(products);
  },[products])
  return (
    <>
        <ProductList products={products}/>
    </>
  )
}

export default withLayout(<Home />);