import { getValue } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import styled from 'styled-components';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { Item } from '../../components/Item';
import { Row } from '../../components/Row';
import { Search } from '../../components/Search';
import { Producto } from '../../Producto';

export const Home: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

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
    return (
      <IsLoadingContainer>
        <BallTriangle color="#00BFFF" height={600} width={600} />
      </IsLoadingContainer>
    );
  }

  return (
    <>
      <Container>
        <Header />
      </Container>
      <input
        type="search"
        placeholder="Search"
        onChange={event => {
          setSearchTerm(event.target.value);
        }}
      />
      <Container>
        <Row>
          {products
            .filter((product: Producto) => {
              if (
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return product;
              }
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
const IsLoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
