import { StatBar, StatContainer, StatListContainer, StatName } from "../styles/MultiUsageStyles";


const MoveStats = ({ power, accuracy }) => {
  return (
    <StatListContainer>
      <StatContainer>
        <StatName>Power</StatName>
        <StatBar max='200' value={ power } />
        {power}
      </StatContainer>
      <StatContainer>
        <StatName>Accuracy</StatName>
        <StatBar max='100' value={ accuracy } />
        {accuracy}
      </StatContainer>
    </StatListContainer>
  )
}

export default MoveStats;