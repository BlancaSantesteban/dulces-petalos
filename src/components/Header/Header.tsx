import React from 'react';
import styled from 'styled-components';
export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo src={require('./logo.png')} alt="Dulces pétalos" />
      <h1>Dulces pétalos</h1>
    </HeaderContainer>
  );
};

const Logo = styled.img`
  width: 80px;
`;
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  h1 {
    margin-left: 15px;
    font-size: 40px;
    @media (min-width: 992px) {
      font-size: 50px;
    }
    @media (min-width: 1400px) {
      font-size: 60px;
    }
  }
`;
