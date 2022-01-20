import { useEffect, useState } from 'react';
import { Producto } from '../Producto';
import GlobalStyle from '../styles/global';
import { Header } from '../components/Header';
import { Container } from '../components/Container';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState<Producto>();

  useEffect(() => {
    getDetail().then(setDetail);
  }, []);

  const getDetail = async () => {
    const response = await fetch(
      `https://dulces-petalos.herokuapp.com/api/product/${id}`,
    );
    const data = await response.json();
    return data;
  };

  if (!detail) {
    return <>Loading</>;
  }
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
      </Container>
      <Container>{detail.name}</Container>
    </>
  );
}
export default Detail;
