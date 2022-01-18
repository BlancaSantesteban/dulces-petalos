import React from 'react';

import { Item } from './styles';

interface Props {
  name: string;
  imgUrl: string;
}

export const Producto: React.FC<Props> = ({ name, imgUrl }) => {
  return <Item imgUrl={imgUrl}>{name}</Item>;
};
