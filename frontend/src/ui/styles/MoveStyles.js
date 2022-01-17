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