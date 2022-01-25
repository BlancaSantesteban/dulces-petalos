import styled from 'styled-components';

export const Search: React.FC = onChange => (
  <SearchStyled>
    <SearchInput type="search" placeholder="Search" />
  </SearchStyled>
);

const SearchStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 24px;
`;
const SearchInput = styled.input`
  font-size: 18px;
  padding: 10px;
  border: 1px solid black;
  outline: none;
  @media (min-width: 992px) {
    font-size: 20px;
  }
  @media (min-width: 1400px) {
    font-size: 25px;
  }
`;
