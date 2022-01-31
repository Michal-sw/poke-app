import styled from "styled-components";

export const FightMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-around;
  align-items: flex-start;
`;

export const AsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const AsideSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  border-radius: 20px;
  padding: 0px 5px 5px 5px;
  gap: 3px;
`

export const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 300px;
  overflow-y: scroll;
  background-color: whitesmoke;
  border-radius:20px;
  border: 3px ridge black;
  gap: 5px;
  align-items: flex-end;
`;
export const Message = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: ${props => props.isSpecial ? '700' : '500'};
  background-color: ${props => props.isSpecial ? 'salmon' : 'pink'};
  border-radius:10px;
  padding: 5px 5px 5px 5px;
  gap: 5px;
`;

export const MessageAuthor = styled.p`
  margin: 0px;
  background-color: white;
  border-radius: 20px;
  padding-left: 4px;
  padding-right: 4px;
  height: fit-content;
`;
export const MessageBoldText = styled.p`
  margin: 0px;
  padding: 0px;
  font-weight: 700;
`
export const MessageContent = styled.p`
  margin: 0px;
  max-width: 250px;
`;

export const MessageInput = styled.textarea`
  font-family: "Pokemon Pixel Font Regular";
  font-size: 1.4em;
  resize: vertical; 

  padding-left: 4px;
  padding-top: 4px;
  width: 220px;
  max-width: 240px;
  max-height: 150px;
  
  border: 5px solid whitesmoke;
  border-style: ridge;
  border-radius: 5px;
  background: white;
`;

export const MessageInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 5px;
  > button {
    font-weight: 700;
    background-color: #e6a28d;
    &:hover {
      background-color: #c96767;
    }
  }
`;

//   // Yellow gym (fajny)
  // https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fb2821a-1406-4a1d-9b04-6668f278e944/d88iryq-e4aad28b-1a49-4b6d-89eb-a66b79700f06.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJmYjI4MjFhLTE0MDYtNGExZC05YjA0LTY2NjhmMjc4ZTk0NFwvZDg4aXJ5cS1lNGFhZDI4Yi0xYTQ5LTRiNmQtODllYi1hNjZiNzk3MDBmMDYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.--vt8oRuBlp_DmQXHzey_ThnTJD-ioKS3XKDnNPOFKo
  // Las (jak sie wyskaluje to spoko)
  // https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fb2821a-1406-4a1d-9b04-6668f278e944/d881rst-67b0388f-4616-4464-a57c-5ea720f36b36.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJmYjI4MjFhLTE0MDYtNGExZC05YjA0LTY2NjhmMjc4ZTk0NFwvZDg4MXJzdC02N2IwMzg4Zi00NjE2LTQ0NjQtYTU3Yy01ZWE3MjBmMzZiMzYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.B_VOXbejHTXl83h-cO2q2l_FDRzi4veWzrXANL6bMx4
  // Las jesienny wieczor
  // https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fb2821a-1406-4a1d-9b04-6668f278e944/d83pwna-4c6af056-47c2-41e0-9d1c-acccc38e06c1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJmYjI4MjFhLTE0MDYtNGExZC05YjA0LTY2NjhmMjc4ZTk0NFwvZDgzcHduYS00YzZhZjA1Ni00N2MyLTQxZTAtOWQxYy1hY2NjYzM4ZTA2YzEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.pV7ILn5oqMI_SoNdzq74VuV73_ECfUo1qB4z3O_EIuc
  // Kamienna pustynia
  // https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fb2821a-1406-4a1d-9b04-6668f278e944/d83tnmo-b19278a2-4c9e-40ed-a230-4f7a00435824.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJmYjI4MjFhLTE0MDYtNGExZC05YjA0LTY2NjhmMjc4ZTk0NFwvZDgzdG5tby1iMTkyNzhhMi00YzllLTQwZWQtYTIzMC00ZjdhMDA0MzU4MjQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kHTmmEHXkMAls0PWzMBDPupuMX3NZxPQdBDj6yv5GIQ
  // Zielona przestrzen
  // https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fb2821a-1406-4a1d-9b04-6668f278e944/d8438m9-b4882d6e-2e94-4bb8-806b-2cf2954711b4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJmYjI4MjFhLTE0MDYtNGExZC05YjA0LTY2NjhmMjc4ZTk0NFwvZDg0MzhtOS1iNDg4MmQ2ZS0yZTk0LTRiYjgtODA2Yi0yY2YyOTU0NzExYjQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.qkaQkdaP6hco13QjkVBLFmcNVEEYSkoDNgVQ4pmYYK8
  // Rozowa przestrzen
  // https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fb2821a-1406-4a1d-9b04-6668f278e944/d844s2l-3cc75658-1ce0-4e90-9013-7569cd4fdc8a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJmYjI4MjFhLTE0MDYtNGExZC05YjA0LTY2NjhmMjc4ZTk0NFwvZDg0NHMybC0zY2M3NTY1OC0xY2UwLTRlOTAtOTAxMy03NTY5Y2Q0ZmRjOGEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6blMWA6UJ5JGyUSgjBY3W8PNKcQE0zo7-ouenqM7zZ4

export const BattleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 500px;
  height: 400px;

  background-image: url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fb2821a-1406-4a1d-9b04-6668f278e944/d83pwna-4c6af056-47c2-41e0-9d1c-acccc38e06c1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJmYjI4MjFhLTE0MDYtNGExZC05YjA0LTY2NjhmMjc4ZTk0NFwvZDgzcHduYS00YzZhZjA1Ni00N2MyLTQxZTAtOWQxYy1hY2NjYzM4ZTA2YzEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.pV7ILn5oqMI_SoNdzq74VuV73_ECfUo1qB4z3O_EIuc);
  background-size: 700px;
  background-position: center bottom;
  border: 10px ridge black;
  border-radius: 5px;
`;

export const SpriteAnimated = styled.div`
  z-index: 1;
  position: relative;
`

export const PokemonHoverDetailContainer = styled.div`
  background-color: whitesmoke;
  width: 100px;
  padding: 10px;
  border-radius: 20px;
  position: relative;
  float: right;
  margin-top: -40px;
  margin-right:  -40px;
  margin-bottom: -40px;
  margin-left: -40px;
  top: -40px;
  right: -40px;
  bottom: -40px;
  left: -40px;
  z-index: 2;
  display: none;
  transform: all 0.2s linear;

  > p {
    margin: 0;
  }
`;

export const PokemonAnimatedContainer = styled.div`
  margin-left: 40px;
  margin-right: 40px;
  align-self: ${props => props.isEnemy ? 'flex-end' : 'flex-start'};
  ${props => props.isEnemy ? 'margin-bottom: auto;' : null}
  ${props => props.isEnemy ? 'margin-top: 40px;' : null}
  &:hover {
    >${PokemonHoverDetailContainer} {
      display: inline-block;
    }
  }
`;

export const FightHoverTypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  padding: 0;
  margin: 0;
`;

export const TypeStamp = styled.p`
  color: black;
  font-size: 1em;
  font-weight: 800;
  margin: 0;
  padding: 1px;
  border: groove 2px black;
  background-color: ${props => props.color};
`;

export const FightMovesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 1;
`;

export const FightMove = styled.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  background-color: whitesmoke;
  padding: 10px;
  border-radius: 10px;
  :hover {
    background-color: ${props => props.isClientTurn ? 'white' : 'whitesmoke'};
    cursor: pointer;
    box-shadow: ${props => props.isClientTurn ? '0 0 1px 1px grey' : 'none' };
  }
  > p {
    margin: 0px;
    padding: 0px;
  }
`;
export const FightMoveDetail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  > ${TypeStamp} {
    height: fit-content
  }
  > p {
    margin: 0px;
    padding: 0px;  
  }
`;

export const RoomIdSelector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
  border: 5px ridge black;
  border-radius: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  max-width: 200px;
  height: fit-content;
  > input {
    font-family: "Pokemon Pixel Font Regular";
    font-size: 1.5em;
  }
  > p {
    margin-top: 0px;
  }
`;

export const FightHpContainer = styled.div`
  display: flex;
  flex-display: row;
  justify-content: flex-end;
  align-items:center;
  margin-bottom: 10px;
`;

export const FightHpStatBar = styled.progress`
  width: 140px;
  height: 6px;

  border-radius: 1px;
  &::-webkit-progress-bar {
    background-color: whitesmoke;
    border-radius: 10px;
    padding: 0.5px 0.5px 0.5px 0px;
    box-shadow: 0.01em 0.03em 0.2em 0.01em grey; 

  }
  &::-webkit-progress-value {
    background-color: ${props => {
      const hpPercentage = ((props.value*100)/props.max);
      if (hpPercentage <= 35) return '#ce0018'
      else if (hpPercentage <= 65) return 'orange'
      else return 'green'
    }};
    border-radius: 10px;
    box-shadow: 0.01em 0.03em 0.2em 0.03em grey; 
  }
`;
export const FightHpStatName = styled.label`
  font-size: 1em;
  margin-right: 5px;
`;
export const FightHpStatContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(130, 255, 203, 0.26);
  border-radius: 20px;
  padding: 0px;
  box-shadow: 0.01em 0.03em 0.2em 0.03em grey; 
  justify-content: space-between;
`;
