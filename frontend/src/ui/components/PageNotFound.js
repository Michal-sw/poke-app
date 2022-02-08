import { BigText, NameLabel, PageNotFoundContainer } from '../styles/MultiUsageStyles'

const PageNotFound = () => {
  return (
    <PageNotFoundContainer>
      <NameLabel>404</NameLabel>
      <BigText>OMG! Team Rocket must have stolen this page!</BigText>
      <img
        src='https://www.pngkit.com/png/full/33-339338_rocket-a-team-rocket-pokemon.png'
        height={'300px'}
      />
    </PageNotFoundContainer>
  )
}

export default PageNotFound;