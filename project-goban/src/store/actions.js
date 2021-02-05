import * as actions from './constants';

export default {
  resetGame({ commit }) {
    commit(actions.NEW_GAME);
  },
  setPresets({ commit }, variant) {
    commit(actions.SET_PRESETS, variant);
  },
  changeSize({ commit }, newSize) {
    commit(actions.CHANGE_SIZE, newSize);
  },
  switchMove({ commit }) {
    commit(actions.SWITCH_MOVE);
  },
  revertMove({ commit }) {
    commit(actions.REVERT_MOVE);
  },
  whiteFirst({ commit }) {
    commit(actions.WHITE_FIRST);
  },
  toggleBlind({ commit }) {
    commit(actions.TOGGLE_BLIND);
  },
  toggleColorless({ commit }) {
    commit(actions.TOGGLE_COLORLESS);
  },
  toggleCoords({ commit }) {
    commit(actions.TOGGLE_COORDS);
  },
  changeCaptives({ commit }, payload) {
    commit(actions.CHANGE_CAPTIVES, payload);
  },
  changeName({ commit }, name) {
    commit(actions.CHANGE_NAME, name);
  },
  toggleSeat({ commit }, payload) {
    commit(actions.TOGGLE_SEAT, payload);
  }
};
