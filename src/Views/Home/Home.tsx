import React, { useEffect, useState } from 'react';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { Item } from '../../components/Item';
import { Row } from '../../components/Row';
import { Search } from '../../components/Search';
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
      <Container>
        <Header />
      </Container>

      <Search />
      <Container>
        <Row>
          {products.map((product: Producto) => (
            <Item
              key={product.id}
              name={product.name}
              imgUrl={product.imgUrl}
              id={product.id}
              binomialName={product.binomialName}
              price={product.price}
            />
          ))}
        </Row>
      </Container>
    </>
  );
};
