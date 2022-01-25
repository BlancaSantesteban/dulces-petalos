import styled from 'styled-components';

interface Props {
  query: string;
}

export const Search: React.FC<Props> = (query, onChange) => (
  <SearchStyled>
    <SearchInput
      type="search"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="search-addon"
      onChange={onChange}
    />
    <SearchButton type="button">search</SearchButton>
  </SearchStyled>
);

const SearchStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 24px;
`;
const SearchInput = styled.input`
  font-size: 15px;
  padding: 10px;
  border: 1px solid black;
  border-right: none;
  outline: none;
`;
const SearchButton = styled.button`
  border-radius: 0;
  background-color: white;
  border: 2px solid blue;
  text-transform: uppercase;
  color: blue;
  cursor: pointer;
  transition: 0.3s ease all;

  &:hover {
    background-color: blue;
    color: white;
  }
`;
