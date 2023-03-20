import types from '../ducks/mqtt_handler/types'
import actions from '../ducks/mqtt_handler/actions'
import mqtt from 'mqtt/dist/mqtt'
import { getEnemyFightPokemon } from '../ducks/pokemons/operations'
const endpoint = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : 'https://localhost:3001/'

const options = {
  clean: true,
  reconnectPeriod: 30000,
  connectTimeout: 30 * 1000,
};

// sigma HOST -
// const host = 'ws://10.45.3.136:8000/mqtt'

// Local host -
// const host = 'ws://192.168.0.13:8000/mqtt'

// Azure host - 
const host = process.env.REACT_APP_MQTT_ENDPOINT
  ? process.env.REACT_APP_MQTT_ENDPOINT
  : 'ws://localhost:8000/mqtt'

const mqttHandler = store => next => async action => {
  if (action.type === types.CONNECTION_INIT) {
    const roomId = parseInt(action.payload.roomId);
    const username = action.payload.username;

    if (!store.getState().fightClient.pokemon.num) {
      store.dispatch(actions.connectionFail('Pokemon must be selected!'))
      return next(action)
    }
    
    const roomJoinError = await fetch(`${endpoint}fights/${roomId}/${username}/can-join`)
      .then(r => r.json())
      .then(res => res.err);

    if (roomJoinError) {
        store.dispatch(actions.connectionFail(roomJoinError))
        return next(action)
    }

    const client = mqtt.connect(host, {
      ...options,
      will: {
        topic: 'fights/connect',
        payload: JSON.stringify({ room: roomId, payload: -1, username }),
        qos: 2
      },
      wsOptions: { rejectUnauthorized: false }
    });

    client.on('connect', async (conn) => {
      client.subscribe(`fights/${roomId}/${username}`, { qos: 2 })
      client.subscribe(`fights/${roomId}`, {
        qos: 2,
      }, () => {
          client.publish('fights/connect', JSON.stringify({
            room: roomId,
            payload: 1,
            username
          }));
          store.dispatch(actions.connectionSuccess({ client, roomId, username }))
      })
    });

    client.on('error', (err) => console.log(err))

    client.on('offline',  () => {
      store.dispatch(actions.connectionFail('Websocket is offline!'))
    })
  

    client.on('message', (topic, mess) => {
      const messageJson = JSON.parse(mess.toString());
      if (messageJson.chat) store.dispatch(actions.chatMessageReceived({ author: messageJson.author, content: messageJson.chat }));
      if (messageJson.pokemon) store.dispatch(getEnemyFightPokemon(messageJson.pokemon));
      if (messageJson.left) store.dispatch(actions.playerLeftRoom(messageJson.left));

      if (messageJson.roomMembers) {
        const newUsername = messageJson.roomMembers
          .find(memberUsername => memberUsername !== store.getState().fightClient.username);
        client.publish(`fights/${roomId}/${newUsername}`, JSON.stringify({
          pokemon: store.getState().fightClient.pokemon.alias
        }));
        store.dispatch(actions.playerJoinedRoom(newUsername));
      };
      
      if (messageJson.move) {
        const fightClient = store.getState().fightClient;
        if (messageJson.target === fightClient.username) {
          const move = store
            .getState().fightEnemy.pokemon.moves
            .find(move => messageJson.move === move.alias);
          const effectiveness = messageJson.effectiveness;
          store.dispatch(actions.moveReceived({
            move: move.name,
            author: messageJson.author,
            damage: messageJson.damage,
            willHit: messageJson.willHit,
            message: !messageJson.willHit 
              ? 'it missed!'
              : effectiveness === 2
                ? 'it was super effective!'
                : effectiveness === 0.5
                  ? "it's not very effective..."
                  : effectiveness === 0
                    ? "pokemon is immune!"
                    : '' 
          }));
        }
      }
    });
  }

  return next(action)
}

export default mqttHandler;
