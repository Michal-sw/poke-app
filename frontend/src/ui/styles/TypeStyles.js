import styled from "styled-components";

export const TypeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  margin-bottom: 20px;

  position: relative;
  transition: all 0.2s linear;
  top: 0;

  background-color: whitesmoke;
  box-shadow: 0px 0px 5px 1px grey;

  // border: 3px solid black;
  // border-style: ridge;

  padding: 10px 1px 0px 1px;
  width: 120px;

  &:hover{
    background-color: #363945;
    top: -3px;
    > p {
      transition: 0.2s linear;
      color: white;
      box-shadow: 0px 0px 2px 1px grey;
      background-color: black;
    }
  }

`;

export const TypeDetailViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AssociatedTypesContainer = styled.div`
  background-color: whitesmoke;
  border-radius: 20px;
  padding: 0px 10px 20px 10px;
  box-shadow: 0px 0px 2px 1px grey;
  * > {transform: 0.2s linear;}
  max-width: 400px;
  max-height: fit-content;
`;