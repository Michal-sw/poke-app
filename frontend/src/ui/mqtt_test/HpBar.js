import { FightHpContainer, FightHpStatBar, FightHpStatName, HoverHpBar } from "../styles/FightStyles";

const HpBar = ({ currHp, fullHp, isEnemy }) => {
  return (
    <HoverHpBar isEnemy={isEnemy}>
      <FightHpContainer>
        <FightHpStatName>HP</FightHpStatName>
        <FightHpStatBar max={fullHp || 100} value={currHp || 0} />
      </FightHpContainer>
    </HoverHpBar>
  )
}

export default HpBar;