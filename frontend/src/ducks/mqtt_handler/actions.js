import types from './types';

const connectionInit = (connectParams) => ({
  type: types.CONNECTION_INIT,
  payload: connectParams
});

const connectionSuccess = (client) => ({
  type: types.CONNECTION_SUCCESS,
  payload: client
});

const connectionFail = (message) => ({
  type: types.CONNECTION_FAIL,
  payload: message
});

const chatMessageReceived = (message) => ({
  type: types.CHAT_MESSAGE_RECEIVED,
  payload: message
});

const chatMessageSent = (message) => ({
  type: types.CHAT_MESSAGE_SENT,
  payload: message
});

const moveReceived = (move) => ({
  type: types.MOVE_RECEIVED,
  payload: move
});

const moveSent = (move) => ({
  type: types.MOVE_SENT,
  payload: move
});

const enemyPokemonReceived = (move) => ({
  type: types.ENEMY_POKEMON_RECEIVED,
  payload: move
});

const clientPokemonChosen = (pokemon) => ({
  type: types.CLIENT_POKEMON_CHOSEN,
  payload: pokemon
});

const playerJoinedRoom = (username) => ({
  type: types.PLAYER_ROOM_JOIN,
  payload: username
});

const playerLeftRoom = (username) => ({
  type: types.PLAYER_ROOM_LEFT,
  payload: username
});

const endFight = (winnerUsername) => ({
  type: types.END_FIGHT,
  payload: winnerUsername
});

const dropConnection = () => ({
  type: types.DROP_CONNECTION
});

const actions = {
  connectionInit,
  connectionSuccess,
  connectionFail,
  chatMessageReceived,
  chatMessageSent,
  moveReceived,
  moveSent,
  enemyPokemonReceived,
  clientPokemonChosen,
  playerJoinedRoom,
  playerLeftRoom,
  endFight,
  dropConnection,
};

export default actions;