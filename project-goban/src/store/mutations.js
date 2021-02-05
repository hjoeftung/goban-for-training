import {
  NEW_GAME,
  SWITCH_MOVE,
  CHANGE_CAPTIVES,
  CHANGE_NAME,
  CHANGE_SIZE,
  TOGGLE_BLIND,
  TOGGLE_COLORLESS,
  WHITE_FIRST,
  TOGGLE_COORDS,
  SET_PRESETS,
  REVERT_MOVE,
  TOGGLE_SEAT
} from './constants';

export default {
  [NEW_GAME](state) {
    state.isBlacksMove = true;
    state.captives.black = 0;
    state.captives.white = 0;
    state.blind = false;
    state.colorless = false;
    state.names.black = '';
    state.names.white = '';
  },
  [SET_PRESETS](state, variant) {
    state.preset = variant;
  },
  [WHITE_FIRST](state) {
    state.isBlacksMove = false;
  },
  [SWITCH_MOVE](state) {
    state.isBlacksMove = !state.isBlacksMove;
  },
  [REVERT_MOVE](state) {
    state.isBlacksMove = !state.isBlacksMove;
  },
  [CHANGE_SIZE](state, newSize) {
    state.size = newSize;
  },
  [CHANGE_NAME](state, name) {
    state.currName = name;
  },
  [CHANGE_CAPTIVES](state, payload) {
    state.captives[payload.color] = payload.number;
  },
  [TOGGLE_BLIND](state) {
    state.blind = !state.blind;
  },
  [TOGGLE_COLORLESS](state) {
    state.colorless = !state.colorless;
  },
  [TOGGLE_COORDS](state) {
    state.showCoords = !state.showCoords;
  },
  [TOGGLE_SEAT](state, payload) {
    state.names[payload.color] = state.names[payload.color] ? '' : payload.name;
  }
};
