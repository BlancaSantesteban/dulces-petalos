import { Link } from 'react-router-dom';
import { Item } from './styles';

interface Props {
  name: string;
  imgUrl: string;
  id: number;
}

export const Producto: React.FC<Props> = ({ name, imgUrl, id }) => {
  return (
    <Link to={`/${id}`}>
      <Item imgUrl={imgUrl}>{name}</Item>
    </Link>
  );
};
