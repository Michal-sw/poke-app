import styled from "styled-components";

export const PokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFD523;
  // #FFCC29
  // background-color: #ffde20;
  // background-color: #18394a;
  margin: 5px 5px 17px 5px;

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

export const PokemonSprite = styled.img`
  width: 13em;
  height: 66%;
  image-rendering: pixelated;
`;

export const PokemonDetailViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 30px 20px 30px;
  width: 100%;
  max-width: 1100px;

`

export const PokemonDetailInfo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: inherit;
  max-width: 950px;
`

export const PokemonMoveCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 2px;
  border-radius: 20px;
  padding: 10px;
  transition: all 0.3s;
  background-color: whitesmoke;
  box-shadow: ${props => `inset 0px 0px 1px 4px ${props.type}` || '0px 0px 5px 1px whitesmoke' };
  & > p {
    font-size: 1.2em;
    padding: 0px;
    margin: 0px;
  }
  &:hover {
    background-color: ${props => props.type};
  }
`;
