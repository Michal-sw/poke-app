const express = require('express');
const router = express.Router({mergeParams: true});
const mqtt = require('mqtt');
const host = 'mqtt://10.45.3.136:1883/mqtt';
const options = {
  clean: true,
  reconnectPeriod: 5000,
  connectTimeout: 30 * 1000,
};

const rooms = { };

const client = mqtt.connect(host, options)

client.on('connect', async (conn) => {
  // schemat wiadomosc ->
  //  {room:${roomId}, payload:1||-1}
  client.subscribe(`fights/connect`, {
    qos: 2,
    will: {
      topic: 'WillMsg',
      payload: 'Connection Closed abnormally..!',
      qos: 0,
      retain: false
    }
  }, () => console.log('MQTT subscribed to all connecting/disconnecting'));
});

client.on('message', (topic, mess) => {
  const messageJson = JSON.parse(mess.toString());
  const roomId = messageJson.room;
  // -1 na wyjscie, 1 na wejscie ->
  const payload = messageJson.payload;

  const fill = rooms[roomId];
  fill ? rooms[roomId] = fill + payload : rooms[roomId] = 1;
  console.log(rooms)
})

router.get('/:roomId/size', (req, res) => {
  const roomId = req.params.roomId;
  rooms[roomId]
    ? res.json(rooms[roomId])
    : res.json(0);
})

module.exports = router;
