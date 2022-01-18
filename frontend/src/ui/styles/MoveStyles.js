import styled from "styled-components";
import { BigText } from "./MultiUsageStyles";

export const MoveCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;


  padding: 5px;
  border-bottom: 2px solid silver;
  width: 100px;
  height: 60px;
  transition: 0.2s linear;
  > ${BigText} {
    margin: 2px;
  }
  &:hover {
    box-shadow: 0 0 2px 2px black;
    background-color: #c53118;
    > ${BigText} {
      color: white;
    }
  }
`;

export const MovePokemonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: whitesmoke;
  padding: 7px;

  max-width: 850px;
  max-height: 500px;
  
  border: 4px solid black;
  border-style: ridge;
  border-radius: 20px;

  overflow-y: scroll;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const MovePokemonCard = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content: space-around;
  border-radius: 20px;
  background-color: white;
  transition: all 0.3s;
  box-shadow: ${props => `inset 0px 0px 2px 2px ${props.type}` || '0px 0px 5px 1px grey' };

  &:hover {
    background-color: ${props => props.type};
  }
`;

export const MoveListScrollable = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  gap: 10px;

  padding: 3px;
  background-color: whitesmoke;

  max-width: 600px;
  min-width: 300px;
  height: 60vh;
  max-height: 800px;
  
  border: 5px solid black;
  border-style: ridge;
  border-radius: 10px;

  overflow-y: scroll;
`;