import types from '../ducks/mqtt_handler/types'
import actions from '../ducks/mqtt_handler/actions'
import mqtt from 'mqtt/dist/mqtt'
import { getEnemyFightPokemon } from '../ducks/pokemons/operations'

const options = {
  clean: true,
  reconnectPeriod: 30000,
  connectTimeout: 30 * 1000,
};

// sigma HOST -
// const host = 'ws://10.45.3.136:8000/mqtt'

// Local host -
// const host = 'ws://192.168.0.13:8000/mqtt'

const host = 'ws://10.45.3.136:8000/mqtt'

const middleware = store => next => action => {
  if (action.type === types.CONNECTION_INIT) {   
    const roomId = parseInt(action.payload);
    const client = mqtt.connect(host, {
      ...options,
      will: {
        topic: 'fights/connect',
        payload: JSON.stringify({ room: roomId, payload: -1 }),
        qos: 2
      }
    });

    client.on('connect', async (conn) => {
      client.subscribe(`fights/${roomId}`, {
        qos: 2,
      }, () => {
          client.publish('fights/connect', JSON.stringify({ room: roomId, payload: 1 }));
          store.dispatch(actions.connectionSuccess({ client, roomId }))
      })
    });

    client.on('close', () => {
      client.publish(
        'fights/connect',
        JSON.stringify({ room: store.getState().mqtt.roomId, payload: -1 })
      );
    });
    
    client.on('message', (topic, mess) => {
      console.log(mess)
      const messageJson = JSON.parse(mess.toString());
      if (messageJson.chat) store.dispatch(actions.chatMessageReceived(messageJson.chat));
      if (messageJson.pokemon) {
        // {"pokemon":"${alias}"} -> wywolaj operacje pobierajaca z API -> 
        store.dispatch(getEnemyFightPokemon(messageJson.pokemon))
      };
      if (messageJson.move) {
        // {"move":"${num}"} -> znajdz w store ->
        const move = store
          .getState().mqtt.enemyPokemon.moves
            .find(move => messageJson.move === move._id);
        // sprawdz czy zadaje 2x, 0.5x lub 1x dmg ->
        // dispatch({ move: ${move.name}, damage: ${move.power}}) ->
        store.dispatch(actions.moveReceived({ move: move.name, damage: move.power }))
      }

      // Wprowadzic jakis mechanizm sprawdzenia przepelnienia pokoju przed wejsciem
      // GET do API pyatajacy o ilosc graczy, jezeli jest < 2 to dolacz,
      // Jezeli nie to daj wiadomosc i na froncie ja wyswietli
      if (messageJson.fill) {
        // {"fill":1||2}
        messageJson.fill === 2
          ? store.dispatch(actions.playerJoinedRoom())
          : store.dispatch(actions.playerLeftRoom());
      }
    })
  }

  return next(action)
}

export default middleware;