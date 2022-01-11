const PokeSearch = ({onClick}) => {
  return (
    <img
      onClick={onClick}
      src="https://raw.githubusercontent.com/itsjavi/pokemon-assets/master/assets/svg/search-button.svg"
      alt="pokeball"
      height="40"
      width="50"
    />
  )
}

export default PokeSearch;