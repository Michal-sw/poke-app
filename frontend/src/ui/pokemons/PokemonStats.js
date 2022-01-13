import styled from "styled-components";

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

const StatContainer = styled.div`
  display: flex;
  flex-display: row;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

const StatBar = styled.progress`
  width:400px;
  height:25px;
  padding: 5px 5px 5px 5px;
  border-radius: 1px;

  &::-webkit-progress-bar {
    background-color: whitesmoke;
    border-radius: 10px;
    padding: 0.6px 0.6px 0.6px 0.6px;
    box-shadow: 0.01em 0.03em 0.3em 0.04em grey; 

  }
    
  &::-webkit-progress-value {
    background-color: gold;
    border-radius: 10px;
    box-shadow: 0.01em 0.03em 0.2em 0.03em grey; 
  }
`;
const StatName = styled.label`
  font-size: 1.5em;
  margin-right: 5px;
`;
const StatListContainer = styled.div`
  background-color: rgba(130, 255, 203, 0.26);
  border-radius: 20px;
  padding: 10px;
  box-shadow: 0.01em 0.03em 0.2em 0.03em grey; 
`;