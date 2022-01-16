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
  gap: 10px;
  max-width: 1300px;
`
export const ItemListFlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 250px;
  width: 300px;
  overflow-y: scroll;
`

export const FlexRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
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


export const NameLabel = styled.p`
  font-weight: 700;
  color: black;
  font-family: "Pokemon Pixel Font Regular";
  font-size: 1.3em;
  margin-top: 17px;
  margin-bottom: 17px;
  background-color: white;
  width: fit-content;
  padding: 5px 20px 5px 20px;
  border-radius: 20px;
  box-shadow: 0.5px 2px 1.5px silver;
`

export const BigText = styled.p`
  font-size: 1.4em;
  margin: 20px;
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

export const MyButton = styled.button`
  margin-top: 10px;
  font-family: "Pokemon Pixel Font Regular";
  font-size: 1.2em;
  padding: 10px;
  background-color: whitesmoke;
  border:none;
  box-shadow: 0px 0px 2px 1px grey;
  border-radius: 10px;
  transition: 0.2s linear;
  &:hover {
    cursor: pointer;
    background-color: white;
  }
  &:active {
    box-shadow: inset 0px 0px 3px 1px grey;
    color: black
  }
`;