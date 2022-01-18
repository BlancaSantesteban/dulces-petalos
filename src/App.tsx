/* eslint-disable @typescript-eslint/no-redeclare */
import { useEffect, useState } from 'react';
import { Producto } from './Producto';
import { Producto as ProductoComponent } from './components/Producto';
import GlobalStyle from './styles/global';

function App() {
  const [products, setProducts] = useState<Producto[]>([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await fetch(
      'https://dulces-petalos.herokuapp.com/api/product',
    );
    const data = await response.json();
    setProducts(data);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <ul>
        {products.map((product: Producto) => (
          <>
            <ProductoComponent
              key={product.id}
              name={product.name}
            ></ProductoComponent>
          </>
        ))}
      </ul>
    </div>
  );
}

export default App;
