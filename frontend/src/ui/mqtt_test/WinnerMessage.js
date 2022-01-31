import { WinnerContainer } from "../styles/FightStyles";
import { NameLabel } from "../styles/MultiUsageStyles";

const WinnerMessage = ({ winner }) => {
  return (
    <WinnerContainer>
      <NameLabel>{winner} has won!!!</NameLabel>
    </WinnerContainer>
  )
}

export default WinnerMessage;