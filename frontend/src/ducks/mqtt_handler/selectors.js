export const selectConnectionClient = (state) => state.mqtt.client;
export const selectConnectionError = (state) => state.mqtt.err;

export const selectClientPokemon = (state) => state.fightClient.pokemon;
export const selectEnemyPokemon = (state) => state.fightEnemy.pokemon;
export const selectClientUsername = (state) => state.fightClient.username;
export const selectEnemyUsername = (state) => state.fightEnemy.username;

export const selectWinner = (state) => state.mqtt.winner;
export const selectMessages = (state) => state.mqtt.messages;
export const selectBattleLog = (state) => state.mqtt.battleLog;
export const selectRoomId = (state) => state.mqtt.roomId;
export const selectIsClientTurn = (state) => state.mqtt.isClientTurn;


