import styled from "styled-components";
import { NameLabel } from "../styles/MultiUsageStyles";

const WinnerMessage = ({ winner }) => {
  return (
    <WinnerContainer>
      <NameLabel>{winner} has won!!!</NameLabel>
    </WinnerContainer>
  )
}

const WinnerContainer = styled.div`
  width: fit-content;
  align-self: center;
  position: relative;
  margin-top: -140px;
  background-color: gold;
  border-radius: 20px;
  padding: 20px;
  z-index: 3;
`;

export default WinnerMessage;