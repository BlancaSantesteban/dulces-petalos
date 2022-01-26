import { useEffect, useState } from 'react';
import { Loader } from '../../components/Loader';

export const Detail: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const response = await fetch(
      'https://dulces-petalos.herokuapp.com/api/product',
    );
    const data = await response.json();
    setIsLoading(false);
    return data;
  };
  if (isLoading) {
    return <Loader />;
  }
  return <>Girasol, Heliantus annuus, 5,25, 1,phosphorus,70</>;
};
