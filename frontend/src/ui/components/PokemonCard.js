import styled from "styled-components";

const PokemonCard = styled.div`
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
`

export default PokemonCard;