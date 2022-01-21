import mqtt from 'mqtt/dist/mqtt'

const options = {
  clean: true,
  reconnectPeriod: 30000,
  connectTimeout: 30 * 1000,
}

const host = 'ws://10.45.3.136:8000/mqtt'

// -t "fights/roomID" -m JSON.stringify(attack:attackName) || JSON.stringify(message:message)
// chat i ataki beda przesylane na tej samej scieżce
// klienci moga sie podlaczyc pod dowolny pokoj 
// ktorego ID bedzie uzywane jako topic ${roomID}

const middleware = store => next => action => {
  if (action.type === 'TYPES_LIST_REQUEST') {
    const client = mqtt.connect(host, options)

    client.on('connect', async (conn) => {
      console.log(conn)
      client.subscribe('fights/roomID')
    })
    client.on('close', () => {
      console.log('closed')
    })
    client.on('message', (topic, mess) => console.log(JSON.parse(mess.toString())))
  }
  // store.dispatch(someAction())
  // store.getState()
  return next(action)
}

export default middleware;