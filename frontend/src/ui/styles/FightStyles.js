import styled from "styled-components";

export const RoomIdSelector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
  border: 5px ridge black;
  border-radius: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  > input {
    font-family: "Pokemon Pixel Font Regular";
    font-size: 1.5em;
    max-width: 50px;
  }
  > p {
    margin-top: 0px;
  }
`;