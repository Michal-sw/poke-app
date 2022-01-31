import mqttTypes from '../ducks/mqtt_handler/types';
import actions from '../ducks/mqtt_handler/actions';

const fightEndHandler = store => next => action => {
  const result = next(action);

  if (action.type === mqttTypes.MOVE_SENT || action.type === mqttTypes.MOVE_RECEIVED) {
    const isMoveReceived = action.type === mqttTypes.MOVE_RECEIVED;
    const state = store.getState();
    const hp = isMoveReceived ? state.fightClient.pokemon.fightHp : state.fightEnemy.pokemon.fightHp;
    const winnerUsername = isMoveReceived ? state.fightEnemy.username : action.payload.author;
    const clientUsername = state.fightClient.username;
    const mqttClient = state.mqtt.client;
    const roomId = state.mqtt.roomId;

    if (hp <= 0) {
      store.dispatch(actions.endFight(winnerUsername))
      setTimeout(() => {
        mqttClient.publish('fights/connect', JSON.stringify({
          room: roomId,
          payload: -1,
          username: clientUsername
        }), { }, () => mqttClient.end());
        store.dispatch(actions.dropConnection())
      }, 5000);
    }
  }

  return result;
} 

export default fightEndHandler;