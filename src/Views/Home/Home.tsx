import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Producto } from '../../Producto';

export const Home: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState('');

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(() => {
        return setErrors('ha habido un error');
      });
  }, []);

  const getProducts = async () => {
    const response = await fetch(
      'https://dulces-petalos.herokuapp.com/api/product',
    );
    const data = await response.json();
    return data;
  };

  if (errors) {
    return <>{errors}</>;
  }

  return (
    <>
      <Header />
      {products.map((product: Producto) => (
        <div key={product.id}>
          <img src={product.imgUrl} alt={`Imagen de una ${product.name}`} />
          <li>
            {product.name}
            {product.price}
          </li>
        </div>
      ))}
    </>
  );
};
