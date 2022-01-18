import styled from 'styled-components';

export const Item = styled.div<{ imgUrl: string }>`
  display: flex;
  justify-content: center;
  flex: 1 1 20%;
  margin: 20px;
  padding: 30px;
  font-size: 28px;
  line-height: 1.1;
  color: white;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.3) 27%,
      rgba(0, 0, 0, 0.3) 100%
    ),
    url(${props => props.imgUrl}) no-repeat;
  background-size: cover;
  &:first-child,
  :nth-child(5n) {
    margin-left: 0;
  }
  &:last-child,
  :nth-child(4n) {
    margin-right: 0;
  }
`;
