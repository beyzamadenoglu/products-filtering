import React, { useEffect, useState } from 'react';
import withLayout from '../../Layouts/Layout.tsx';
import { useDispatch } from 'react-redux';


import getAllProducts from '../../Services/api/products.tsx';
import ProductList from '../../Components/ProductList/ProductList.tsx';
import LoadingSpinner from '../../Components/Loading/Loading.jsx';
import { setProducts } from '../../Actions/productActions.tsx'

interface Product {
 products: string[];
}

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Product[]>([]);
  const dispatch = useDispatch();
  
  useEffect(async () => {
    setLoading(true);
    try {
      const _data = await getAllProducts();
      setData(_data);
      dispatch(setProducts(_data));
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  }, []);

  return (
    <>
     {loading ? <LoadingSpinner /> : <ProductList />}
    </>
  );
};

export default withLayout(<Home />);
