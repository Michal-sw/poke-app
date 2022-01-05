import styled from "styled-components";

export const PokemonCard = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFD523;
  // #FFCC29
  // background-color: #ffde20;
  // background-color: #18394a;
  margin: 5px 10px 27px;

  height:13em;
  width: 13em;

  font-size: 1em;
  position: relative;

  transition: all 0.2s linear;
  top: 0;
  box-shadow: 0 0 0.5em grey;
  
  border: 8px solid black;
  border-style: ridge;
  border-radius: 10px;
  &.h4 {
    color: white;
  }
  &:hover{
    background-color: #c53118;
    // background-color: #18394a;
    box-shadow:  0 0 1em grey;
    top: -3px;
    cursor: pointer;
  }
`;

export const PokemonCardHead = styled.div`
  display: flex;
  box-shadow: 0px 3px 1px silver;
  background-color: whitesmoke;
  width: 100%;
  justify-content: center;
`;
export const PokemonCardName = styled.h4`
  font-family: "Pokemon Pixel Font Regular";
  font-size: 1.3em;
  margin-top: 17px;
  margin-bottom: 17px;
  background-color: white;
  width: fit-content;
  padding: 5px 20px 5px 20px;
  border-radius: 20px;
  box-shadow: 0.5px 2px 1.5px silver;
`;


export const PokemonSprite = styled.img`
  width: 13em;
  height: auto;
`;