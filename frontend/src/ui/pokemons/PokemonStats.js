import { StatBar, StatContainer, StatListContainer, StatName } from "../styles/MultiUsageStyles";


const PokemonStats = ({ stats }) => {
  return (
    <StatListContainer>
      <StatContainer>
        <StatName>Attack</StatName>
        <StatBar max='150' value={stats?.atk || 0} />
        {stats?.atk}
      </StatContainer>
      <StatContainer>
        <StatName>Defense</StatName>
        <StatBar max='150' value={stats?.def || 0} />
        {stats?.def}
      </StatContainer>
      <StatContainer>
        <StatName>HP</StatName>
        <StatBar max='150' value={stats?.hp || 0} />
        {stats?.hp}
      </StatContainer>
      <StatContainer>
        <StatName>Special Attack</StatName>
        <StatBar max='150' value={stats?.spa || 0} />
        {stats?.spa}
      </StatContainer>
      <StatContainer>
        <StatName>Special Defense</StatName>
        <StatBar max='150' value={stats?.spd || 0} />
        {stats?.spd}
      </StatContainer>
      <StatContainer>
        <StatName>Speed</StatName>
        <StatBar max='150' value={stats?.spe || 0} />
        {stats?.spe}
      </StatContainer>
    </StatListContainer>
  )
}

export default PokemonStats;