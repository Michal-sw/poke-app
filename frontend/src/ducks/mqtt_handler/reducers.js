import types from './types';

const mqttInitState = {
  client: null,
  messages: [],
  roomId: 0,
  roomFill: 0,
  battleLog: [],
  loading: false,
  err: '',
}

const fightParticipantInitState = {
  username: '',
  pokemon: { hp: 0, moves: [], types: [] },
}

export const mqttReducer = (state = mqttInitState, action) => {
    switch(action.type) {
      case types.CONNECTION_INIT:
        return { ...state, loading: true }
      case types.CONNECTION_SUCCESS:
        return { ...state, loading: false, client: action.payload.client, roomId: action.payload.roomId };
      case types.CONNECTION_FAIL: 
        return { ...state, loading: false, client: null, err: action.payload }

      case types.CHAT_MESSAGE_RECEIVED:
        return { ...state, messages: [...state.messages, action.payload] }
      case types.CHAT_MESSAGE_SENT: 
        return { ...state, messages: [...state.messages, action.payload] }

      case types.MOVE_RECEIVED: 
        return { ...state, battleLog: [...state.battleLog, action.payload] }
      case types.MOVE_SENT: 
        return { ...state, battleLog: [...state.battleLog, action.payload] }
    
      case types.PLAYER_ROOM_JOIN:
        return { ...state, messages: [...state.messages, { author: 'system', content: `${action.payload} joined the room!` }], roomFill: state.roomFill + 1 }
      case types.PLAYER_ROOM_LEFT:
        return { ...state, messages: [...state.messages, { author: 'system', content: `${action.payload} left the room!` }], roomFill: state.roomFill - 1 }
  
      default:
        return state;
    };
};

export const fightEnemyReducer = (state = fightParticipantInitState, action) => {
  switch(action.type) {
    case types.ENEMY_POKEMON_RECEIVED: 
      return { ...state, pokemon: { ...action.payload, fightHp: action.payload.stats.hp } }
    
    case types.PLAYER_ROOM_JOIN:
      console.log(action.payload)
      return { ...state, username: action.payload }

    case types.PLAYER_ROOM_LEFT:
      return { ...state, pokemon: fightParticipantInitState.pokemon, username: fightParticipantInitState.username }
    
    case types.CONNECTION_FAIL: 
    return { ...state, pokemon: fightParticipantInitState.pokemon, username: fightParticipantInitState.username }

    case types.MOVE_RECEIVED: 
      return { ...state, pokemon: { ...state.pokemon, hp: state.hp - action.payload.damage } }

    default:
      return state;
  };
};

export const fightClientReducer = (state = fightParticipantInitState, action) => {
  switch(action.type) {
    case types.CLIENT_POKEMON_CHOSEN: 
      return { ...state, pokemon: { ...action.payload, fightHp: action.payload.stats.hp } }
      
    case types.CONNECTION_SUCCESS:
      return { ...state, roomId: action.payload.roomId, username: action.payload.username };

    default:
      return state;
  };
};