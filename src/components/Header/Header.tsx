import styled from 'styled-components';

const StyledHeader = styled.h1`
  font-size: 32px;
  font-weight: bold;
`;

export function Header(title: string) {
  return <StyledHeader>{title}</StyledHeader>;
}
