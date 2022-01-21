import types from './types';

const connectionInit = (topic) => ({
  type: types.CONNECTION_INIT,
  payload: topic
})

const connectionSuccess = (client) => ({
  type: types.CONNECTION_SUCCESS,
  payload: client
})

const connectionFail = () => ({
  type: types.CONNECTION_FAIL
})

const chatMessageReceived = (message) => ({
  type: types.CHAT_MESSAGE_RECEIVED,
  payload: message
})

const actions = {
  connectionInit,
  connectionSuccess,
  connectionFail,
  chatMessageReceived
};

export default actions;