import React, { useEffect, useState } from 'react';
import withLayout from '../../Layouts/Layout.tsx';

import getAllProducts from '../../Services/api/products.tsx';
import ProductList from '../../Components/ProductList/ProductList.tsx';
import LoadingSpinner from '../../Components/Loading/Loading.jsx';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const data = await getAllProducts();
      setProducts(data.products);
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };
  
  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <>
     {loading ? <LoadingSpinner /> : <ProductList products={products} />}
    </>
  );
};

export default withLayout(<Home />);
