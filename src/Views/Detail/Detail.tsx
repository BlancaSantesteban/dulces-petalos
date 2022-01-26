import { useEffect, useState } from 'react';
import { Producto } from '../../Producto';
import { useParams } from 'react-router-dom';
import { Loader } from '../../components/Loader';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { SideWrapper } from '../../components/SideWrapper/SideWrapper';
import styled from 'styled-components';
import { Breadcrumbs } from '../../components/Breadcrumbs';

export const Detail: React.FC = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState<Producto>();
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState('');

  useEffect(() => {
    getDetail()
      .then(setDetail)
      .catch(() => {
        return setErrors('ha habido un error');
      });
  }, []);

  const getDetail = async () => {
    const response = await fetch(
      `https://dulces-petalos.herokuapp.com/api/product/${id}`,
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
        <Breadcrumbs />
      </SideWrapper>
      <DetailWrapper>
        <DetailImg src={detail?.imgUrl} alt={`Imagen de una ${detail?.name}`} />
        <DetailDescription>
          <h1>{detail?.name}</h1>
          <h2>{detail?.binomialName}</h2>
          <span>Precio: {detail?.price.toFixed(2)}€</span>
          <span>Waterings per week: {detail?.wateringsPerWeek}</span>
          <span>Fertilizante: {detail?.fertilizerType}</span>
          <span>Height: {detail?.heightInCm}</span>
        </DetailDescription>
      </DetailWrapper>
    </>
  );
};

const DetailWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 0 24px;
`;
const DetailImg = styled.img`
  flex-basis: 50%;
`;
const DetailDescription = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  margin-left: 50px;
  h1 {
    font-size: 50px;
    margin: 10px 0;
  }
  h2 {
    font-style: italic;
    margin: 10px 0;
  }
  span {
    font-size: 20px;
  }
`;
