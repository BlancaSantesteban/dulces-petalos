import { BallTriangle } from 'react-loader-spinner';
import styled from 'styled-components';

export const Loader: React.FC = () => {
  return (
    <IsLoadingContainer>
      <BallTriangle color="#00BFFF" height={600} width={600} />
    </IsLoadingContainer>
  );
};

const IsLoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
