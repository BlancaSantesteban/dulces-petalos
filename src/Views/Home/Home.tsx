import React, { useEffect, useState } from 'react';
import { Producto } from '../../Producto';

export const Home: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const getProducts = async () => {
    const response = await fetch(
      'https://dulces-petalos.herokuapp.com/api/product',
    );
    const data = await response.json();
    return data;
  };
  return (
    <>
      <h1>Dulces pétalos</h1>
      {products.map((product: Producto) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </>
  );
};
