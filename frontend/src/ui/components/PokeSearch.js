import svgPath from "../../assets/common_svg/poke_search.svg";

const PokeSearch = ({onClick}) => {
  return (
    <img
      onClick={onClick}
      src={svgPath}
      alt="pokeball"
      height="40"
      width="50"
    />
  )
}

export default PokeSearch;