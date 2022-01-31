import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Field } from 'formik';

export const MainListFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 50px 20px 50px;
`
export const ItemListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;
  max-width: 1300px;
`
export const ItemListFlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 250px;
  width: 300px;
  overflow-y: scroll;
`

export const FlexRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;
export const PageButton = styled.button`
  font-family: "Pokemon Pixel Font Regular";
  font-size: 1.5em;
  border-radius: 20px;
  background-color: whitesmoke;
  &:active {
    background-color: white;
    color: black
  }
`;
export const PageCounter = styled.p`
  font-size: 1.3em;
  margin: 15px 0px 15px 0px;
`

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;


export const NameLabel = styled.p`
  font-weight: 700;
  color: black;
  font-family: "Pokemon Pixel Font Regular";
  font-size: 1.3em;
  margin-top: 17px;
  margin-bottom: 17px;
  background-color: white;
  width: fit-content;
  padding: 5px 20px 5px 20px;
  border-radius: 20px;
  box-shadow: 0.5px 2px 1.5px silver;
`

export const BigText = styled.p`
  font-size: 1.4em;
  margin: 20px;
`;

export const SearchInput = styled.input`
  font-family: "Pokemon Pixel Font Regular";
  font-size: 2em;
  text-align:center;
  border: 3px solid whitesmoke;
  border-style: outset;
  border-radius: 5px;
  box-shadow:inset 1px 1px 5px grey ;
  background: white;
  width: ${props => props.width ? props.width : 'auto' };
}`;

export const NavContainer = styled.nav`
  display: flex;
  flex-display: row;
  flex-wrap: wrap;
  background-color: whitesmoke;
  box-shadow: 1px 1px 0.5em grey;
  border-radius: 30px;
  width: 80%;
  align-items: center;
  justify-self:center;
  justify-content: space-around;
  margin-top: 10px;
  margin-bottom: 15px;
  padding: 10px 5px 10px 5px;
  min-width: 300px;
`;

export const NavLink = styled.div`
  background-image: url("https://raw.githubusercontent.com/itsjavi/pokemon-assets/master/assets/svg/pokeball-banner.svg");
  width: 282px;
  margin-right: 5px;
  transition: all 0.08s linear;

  &:hover {
    box-shadow: 0.5px 0.5px 0.5em #838383;
    border-radius: 100px;
  }
  > a {
    text-decoration: none;
  }
`;

export const NavName = styled.p`
  color: Black;
  font-size: 2em;
  margin-top:11px;
  margin-bottom:11px;
`;

export const GrassTileContainer = styled.div`
  z-index: -1;
  position: relative;
  top: 130px;
`;

export const SpriteOnTile = styled.div`
  position: relative;
  bottom:120px;
`;

export const MyLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const PokemonLogoImg = styled.img`
width: 80px;
height: 59px;
object-fit: cover;
object-position: 0 -16px;
border-radius: 20px;
`;

export const MyButton = styled.button`
  margin-top: 10px;
  font-family: "Pokemon Pixel Font Regular";
  font-size: 1.2em;
  padding: 10px;
  background-color: whitesmoke;
  border:none;
  box-shadow: 0px 0px 2px 1px grey;
  border-radius: 10px;
  transition: 0.2s linear;
  &:hover {
    cursor: pointer;
    background-color: white;
    box-shadow: 0px 0px 0.5px 0.5px grey;
  }
  &:active {
    box-shadow: inset 0px 0px 3px 1px grey;
    color: black
  }
`;

export const StatContainer = styled.div`
  display: flex;
  flex-display: row;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

export const StatBar = styled.progress`
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
export const StatName = styled.label`
  font-size: 1.5em;
  margin-right: 5px;
`;
export const StatListContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(130, 255, 203, 0.26);
  border-radius: 20px;
  padding: 10px;
  box-shadow: 0.01em 0.03em 0.2em 0.03em grey; 
  justify-content: space-between;
`;

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1px;
  margin-bottom: 5px;
  width: 252px;
  label {
    font-size: 1.5em
  }
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 320px;
  margin: 0px;
  > p {
    font-size: 1.5em;
    margin: 0px;
  }
`;
export const MyField = styled(Field)`
  padding-left: 5px;
  font-size: 1.5em;
  font-family: "Pokemon Pixel Font Regular";
  margin: 0px 10px 0px 10px;
  border-radius: 10px;
  border: 5px ridge whitesmoke;
`;

export const FormContainer = styled.div`
  background-color: whitesmoke;
  border-radius: 20px;
  border: 5px ridge whitesmoke;
  padding: 0px 20px 20px 20px;
`;

export const DeleteButton = styled.div`
  display: inline-block;
  margin-top:5px;
  margin-bottom:5px;
  font-weight: 700;
  font-size: 1.8em;
  width: 125px;
  background-color: red;
  border-radius: 20px;
  transition: 0.1s linear;
  &:hover {
    cursor: pointer;
    background-color: black;
    color: red;
  }
`;

export const TextNoMargin = styled.p`
  padding: 0px;
  margin: 0px;
`;

export const LoadingText = styled.p`
font-size: 3em;
`;