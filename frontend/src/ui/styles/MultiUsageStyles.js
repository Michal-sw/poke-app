import styled from "styled-components";

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

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
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
