import styled from "styled-components";
import { Link } from 'react-router-dom';

export const MainListFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 50px 0px 50px;
`
export const ItemListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`
export const PageButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const PageButton = styled.button`
  font-family: "Pokemon Pixel Font Regular";
  font-size: 1.2em;
  &:active: {
    background-color: black;
  }
`;
export const PageCounter = styled.p`
  font-size: 1.3em;
  margin: 15px 0px 15px 0px;
`

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const SearchInput = styled.input`
  font-family: "Pokemon Pixel Font Regular";
  font-size: 2em;
  text-align:center;
  border: 3px solid whitesmoke;
  border-style: outset;
  border-radius: 5px;
  box-shadow:inset 1px 1px 5px grey ;
  background: white;
}`;


export const MyLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;