export default {
  size: state => state.size,
  isBlacksMove: state => state.isBlacksMove,
  blind: state => state.blind,
  colorless: state => state.colorless,
  captives: state => ({ ...state.captives }),
  names: state => ({ ...state.names }),
  showCoords: state => state.showCoords,
  currName: state => state.currName,
  allowedToPlay: state => {
    if (state.isBlacksMove && state.names.black && state.names.black === state.currName) {
      return true;
    }
    if (!state.isBlacksMove && state.names.white && state.names.white === state.currName) {
      return true;
    }
    return false;
  }
};
