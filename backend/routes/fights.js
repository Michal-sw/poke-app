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
  //  {room:${roomId}, payload:1||-1, username}
  client.subscribe(`fights/connect`, { qos: 2 },
    () => console.log('MQTT subscribed to all connecting/disconnecting'));
});

client.on('message', (topic, mess) => {
  const messageJson = JSON.parse(mess.toString());
  const roomId = messageJson.room;
  // -1 na wyjscie, 1 na wejscie ->
  const payload = messageJson.payload;
  const username = messageJson.username;
  const roomMembers = rooms[roomId] || [];

  if (payload === -1) {
    const newMembers = roomMembers.filter(member => member !== username);
    rooms[roomId] = newMembers;
    client.publish(
      `fights/${roomId}`,
      JSON.stringify({ left: username }),
      { qos: 2 }
    )
  } else {
    const newMembers = [...roomMembers, username];
    rooms[roomId] = newMembers;
    if (newMembers.length > 1) client.publish(
      `fights/${roomId}`,
      JSON.stringify({ roomMembers: rooms[roomId] })
    )
  }
  console.log(rooms)
})

router.get('/:roomId/:username/can-join', (req, res) => {
  const room = rooms[req.params.roomId];
  const username = req.params.username;

  if (room) {
    const usernameTaken = room.find(user => user === username);
    const isFilled = room.length >= 2;

    if (isFilled) res.json({ value: false, err: 'Room is filled' })
    else if (usernameTaken) res.json({ value: false, err: 'Username already taken' })
    else res.json({ value: true });
  } else {
    res.json({ res: true })
  }
})

module.exports = router;
