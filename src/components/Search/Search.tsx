import styled from 'styled-components';

interface Props {
  onSearch: (searchTerm: string) => void;
}

export const Search: React.FC<Props> = ({ onSearch }) => (
  <SearchInput
    type="search"
    placeholder="Search"
    onChange={event => onSearch(event.target.value)}
  />
);

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
