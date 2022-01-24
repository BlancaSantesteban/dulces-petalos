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
          <i>{price}€</i>
        </div>
      </ItemText>
    </ItemElement>

    //</Link>
  );
};
const ItemElement = styled.div`
  position: relative;
  flex-basis: 24%;
  margin-bottom: 40px;
  display: inline-block;
  overflow: hidden;
  width: 100%;
  min-height: 300px;
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
  div {
    position: absolute;
    bottom: 20px;
    display: flex;
    align-self: flex-end;
    justify-content: space-around;
    width: 100%;
    font-size: 25px;
  }
`;
