import types from '../ducks/mqtt_handler/types'
import actions from '../ducks/mqtt_handler/actions'
import mqtt from 'mqtt/dist/mqtt'
import { getEnemyFightPokemon } from '../ducks/pokemons/operations'

const options = {
  clean: true,
  reconnectPeriod: 30000,
  connectTimeout: 30 * 1000,
}

// sigma HOST -
// const host = 'ws://10.45.3.136:8000/mqtt'

// Local host -
// const host = 'ws://192.168.0.13:8000/mqtt'

const host = 'ws://10.45.3.136:8000/mqtt'

// -t "fights/roomID" -m JSON.stringify(attack:attackName) || JSON.stringify(message:message)
// chat i ataki beda przesylane na tej samej scieżce
// klienci moga sie podlaczyc pod dowolny pokoj 
// ktorego ID bedzie uzywane jako topic ${roomID}

const middleware = store => next => action => {
  if (action.type === types.CONNECTION_INIT) {
    const client = mqtt.connect(host, options)

    client.on('connect', async (conn) => {
      client.subscribe('fights/roomID', {
        will: {
          topic: 'WillMsg',
          payload: 'Connection Closed abnormally..!',
          qos: 0,
          retain: false
        }
      }, () => store.dispatch(actions.connectionSuccess(client)))
    })

    client.on('close', () => {
      console.log('closed')
    })
    
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
        console.log(messageJson.move)
        console.log(store.getState().mqtt.enemyPokemon.moves)
        const move = store
          .getState().mqtt.enemyPokemon.moves
            .find(move => messageJson.move === move._id);
        // sprawdz czy zadaje 2x, 0.5x lub 1x dmg ->
        // dispatch({ move: ${move.name}, damage: ${move.power}}) ->
        store.dispatch(actions.moveReceived({ move: move.name, damage: move.power }))
      }
    })
  }

  return next(action)
}

export default middleware;