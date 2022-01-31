import { FightHpContainer, FightHpStatBar, FightHpStatName } from "../styles/FightStyles";

const HpBar = () => {
  return (
  <FightHpContainer>
    <FightHpStatName>HP</FightHpStatName>
    <FightHpStatBar max={'150'} value={60 || 0} />
  </FightHpContainer>
  )
}

export default HpBar;