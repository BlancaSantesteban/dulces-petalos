import { useEffect, useState } from 'react';
import { Producto } from '../Producto';
import { Producto as ProductoComponent } from '../components/Producto';
import GlobalStyle from '../styles/global';
import { Header } from '../components/Header';
import { Container } from '../components/Container';

function Home() {
  const [products, setProducts] = useState<Producto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  const getProducts = async () => {
    const response = await fetch(
      'https://dulces-petalos.herokuapp.com/api/product',
    );
    const data = await response.json();
    return data;
  };

  if (loading) {
    return <>Loading</>;
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
      </Container>
      <Container>
        {products.map((product: Producto) => (
          <ProductoComponent
            key={product.id}
            name={product.name}
            imgUrl={product.imgUrl}
            id={product.id}
          />
        ))}
      </Container>
    </>
  );
}

export default Home;
