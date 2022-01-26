import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { Item } from '../../components/Item';
import { Loader } from '../../components/Loader';
import { Row } from '../../components/Row';
import { Search } from '../../components/Search';
import { SideWrapper } from '../../components/SideWrapper/SideWrapper';
import { Producto } from '../../Producto';

export const Home: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [searchItem, setSearchItem] = useState('');

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
    setIsLoading(false);
    return data;
  };

  if (errors) {
    return <>{errors}</>;
  }
  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <SideWrapper>
        <Search onSearch={setSearchItem} />
      </SideWrapper>

      <Container>
        <Row>
          {products
            .filter((product: Producto) => {
              return (
                product.name.toLowerCase().includes(searchItem.toLowerCase()) ||
                product.binomialName
                  .toLowerCase()
                  .includes(searchItem.toLowerCase())
              );
            })
            .map((product: Producto) => (
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
