//import { Link } from 'react-router-dom';

import styled from 'styled-components';

interface Props {
  name: string;
  imgUrl: string;
  id: number;
  binomialName: string;
  price: number;
}

export const Item: React.FC<Props> = ({
  name,
  imgUrl,
  id,
  binomialName,
  price,
}) => {
  return (
    //<Link to={`/${id}`}>

    <ItemElement key={id}>
      <ItemImage src={imgUrl} alt={`Imagen de una ${name}`} />
      <ItemText>
        <h1>{name}</h1>
        <div>
          <span>{binomialName}</span>
          <i>{price.toFixed(2)}€</i>
        </div>
      </ItemText>
    </ItemElement>

    //</Link>
  );
};
const ItemElement = styled.div`
  position: relative;
  flex-basis: 49%;
  margin-bottom: 1%;
  display: inline-block;
  overflow: hidden;
  width: 100%;
  min-height: 300px;
  @media (min-width: 768px) {
    flex-basis: 32%;
  }
  @media (min-width: 1024px) {
    flex-basis: 24%;
  }
`;

const ItemImage = styled.img`
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
  filter: brightness(0.7);
`;
const ItemText = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  h1 {
    font-size: 25px;

    @media (min-width: 1220px) {
      font-size: 32px;
    }
  }
  div {
    position: absolute;
    bottom: 20px;
    display: flex;
    align-self: flex-end;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    font-size: 18px;

    @media (min-width: 992px) {
      font-size: 20px;
    }
    @media (min-width: 1400px) {
      font-size: 25px;
    }
  }
`;
