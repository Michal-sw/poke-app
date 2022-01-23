import types from './types';

const connectionInit = (topic) => ({
  type: types.CONNECTION_INIT,
  payload: topic
});

const connectionSuccess = (client) => ({
  type: types.CONNECTION_SUCCESS,
  payload: client
});

const connectionFail = () => ({
  type: types.CONNECTION_FAIL
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

const playerJoinedRoom = () => ({
  type: types.PLAYER_ROOM_JOIN
});

const playerLeftRoom = () => ({
  type: types.PLAYER_ROOM_LEFT
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
};

export default actions;