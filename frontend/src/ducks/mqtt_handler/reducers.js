import types from './types';

const mqttInitState = {
  client: null,
  messages: [],
  loading: false,
  err: '',
}

export const mqttReducer = (state = mqttInitState, action) => {
    switch(action.type) {
      case types.CONNECTION_SUCCESS:
        return { ...state, client: action.payload };
      case types.CHAT_MESSAGE_RECEIVED:
        return { ...state, messages: [...state.messages, action.payload] }
      default:
        return state;
    }
}