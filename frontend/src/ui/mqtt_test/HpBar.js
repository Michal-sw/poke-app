import styled from "styled-components";
import { FightHpContainer, FightHpStatBar, FightHpStatName } from "../styles/FightStyles";

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

const HoverHpBar = styled.div`
  position: relative;
  z-index: 2;
  bottom: ${props => props.isEnemy ? '0px' : '25px'};
`;

export default HpBar;