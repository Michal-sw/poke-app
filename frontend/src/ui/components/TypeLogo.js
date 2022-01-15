import styled from "styled-components";

const TypeLogo = ({ type }) => {
  return (
    <LogoContainer>
      {type ? <img
        src={require(`../../assets/types_svg_icons/badge/${type}.svg`)}
        alt="TypeLogo"
        height="83"
        width="85"
      /> : null}
    </LogoContainer>
  )
}


export default TypeLogo;


const LogoContainer = styled.div`
  padding: 0px;
  border-radius: 100px;
  width: 85px;
  transition: all 0.4s;
  background-color: whitesmoke;
  box-shadow: inset 0px 0px 1px 10px black;
  margin-right: 5px;
  &:hover {
    background-color: black;
  }
`;