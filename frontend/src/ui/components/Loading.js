const Loading = ({ rotation }) => {
  console.log(rotation)
  return (
    <img style={ rotation ? { transition: 'width 2s'  } : null }
      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Poké_Ball_icon.svg"
      alt="pokeball"
      height="87"
      width="100"
    />
  )
}

export default Loading;