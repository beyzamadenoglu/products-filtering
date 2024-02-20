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
  const dispatch = useDispatch();
  
  useEffect( () => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await getAllProducts();
        setData(data);
       dispatch(setProducts(data));
      } catch (error) {
        console.error('Error:', error);
      }
      setLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <>
     {loading ? <LoadingSpinner /> : <ProductList />}
    </>
  );
};

export default withLayout(<Home />);
