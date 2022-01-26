import { useEffect, useState } from 'react';
import { Loader } from '../../components/Loader';

export const Detail: React.FC = () => {
  const [product, setProduct] = useState();
  const [errors, setErrors] = useState('');

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getProduct()
      .then(setProduct)
      .catch(() => {
        return setErrors('ha habido un error');
      });
  }, []);

  const getProduct = async () => {
    const response = await fetch(
      'https://dulces-petalos.herokuapp.com/api/product/:id',
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
  return <>Girasol, Heliantus annuus, 5,25, 1,phosphorus,70</>;
};
