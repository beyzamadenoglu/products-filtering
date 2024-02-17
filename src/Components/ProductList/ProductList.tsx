import React from 'react';
import ProductCard from '../Product/ProductCard.tsx';
import './ProductList.scss';

interface Product {
  id: number;
  title: string;
  images: string[];
  price: string;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="product-list row row-cols-1 row-cols-md-3 g-2 p-4 ">
      {products.map(product => (
        <div key={product.id} className="col mb-4">
          <ProductCard
            name={product.title}
            image={product.images[0]}
            price={product.price}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
