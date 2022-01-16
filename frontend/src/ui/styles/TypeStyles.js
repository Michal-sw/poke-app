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
  padding: 10px 0px 0px 0px;
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
`;

