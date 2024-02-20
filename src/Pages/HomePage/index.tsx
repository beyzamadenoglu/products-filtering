/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import withLayout from '../../Layouts/Layout.tsx';
import { useDispatch } from 'react-redux';


import getAllProducts from '../../Services/api/products.tsx';
import ProductList from '../../Components/ProductList/ProductList.tsx';
import LoadingSpinner from '../../Components/Loading/Loading.jsx';
import { setProducts } from '../../Actions/productActions.tsx'

const Home = () => {
  const [loading, setLoading] = useState(false);
  
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const data = await getAllProducts();
      dispatch(setProducts(data));
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {loading ? <LoadingSpinner /> : <ProductList />}
    </>
  );
};

export default withLayout(<Home />);