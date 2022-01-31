import mqttTypes from '../ducks/mqtt_handler/types';
import actions from '../ducks/mqtt_handler/actions';

const fightEndHandler = store => next => action => {
  const result = next(action);
  if (action.type === mqttTypes.MOVE_SENT) {
    const hp = store.getState().fightEnemy.pokemon.fightHp;
    const mqttClient = store.getState().mqtt.client;
    const roomId = store.getState().mqtt.roomId;

    if (hp <= 0) {
      store.dispatch(actions.endFight(action.payload.author))
      setTimeout(() => {
        mqttClient.publish('fights/connect', JSON.stringify({
          room: roomId,
          payload: -1,
          username: action.payload.author
        }), {}, () => mqttClient.end());
        store.dispatch(actions.dropConnection())
      }, 5000);
    }
  } else if (action.type === mqttTypes.MOVE_RECEIVED) {
    const hp = store.getState().fightClient.pokemon.fightHp ;
    const mqttClient = store.getState().mqtt.client;
    const roomId = store.getState().mqtt.roomId;
    const winnerUsername = store.getState().fightEnemy.username;
    const clientUsername = store.getState().fightClient.username;

    if (hp <= 0) {
      store.dispatch(actions.endFight(winnerUsername))
      setTimeout(() => {
        mqttClient.publish('fights/connect', JSON.stringify({
          room: roomId,
          payload: -1,
          username: clientUsername
        }), {}, () => mqttClient.end());
        store.dispatch(actions.dropConnection())
      }, 5000);    
    }
  };

  return result;
} 

export default fightEndHandler;