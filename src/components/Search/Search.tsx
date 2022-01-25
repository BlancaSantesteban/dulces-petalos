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
  font-size: 25px;
  padding: 10px;
  border: 1px solid black;
  border-right: none;
  outline: none;
`;
