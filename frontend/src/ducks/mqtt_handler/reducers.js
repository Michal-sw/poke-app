import types from './types';

const mqttInitState = {
  client: null,
  messages: [],
  roomId: 0,
  clientPokemon: { hp: 0, moves: [], types: [] },
  enemyPokemon: { hp: 0, moves: [], types: [] },
  battleLog: [],
  loading: false,
  err: '',
}

export const mqttReducer = (state = mqttInitState, action) => {
    switch(action.type) {
      case types.CONNECTION_SUCCESS:
        return { ...state, client: action.payload.client, roomId: action.payload.roomId };
      case types.CHAT_MESSAGE_RECEIVED:
        return { ...state, messages: [...state.messages, action.payload] }
      case types.CONNECTION_FAIL: 
        return { ...state, client: null }

      case types.CHAT_MESSAGE_SENT: 
        return { ...state, messages: [...state.messages, action.payload] }

      case types.MOVE_RECEIVED: 
        return { ...state, clientPokemon: { ...state.clientPokemon, hp: state.hp - action.payload.damage }, battleLog: [...state.battleLog, action.payload] }
      case types.MOVE_SENT: 
        return { ...state, battleLog: [...state.battleLog, action.payload] }
    
      case types.ENEMY_POKEMON_RECEIVED: 
        return { ...state, enemyPokemon: { ...action.payload, fightHp: action.payload.stats.hp } }
      case types.CLIENT_POKEMON_CHOSEN: 
        return { ...state, clientPokemon: { ...action.payload, fightHp: action.payload.stats.hp } }
    
      default:
        return state;
    }
}