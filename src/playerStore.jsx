import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import {PlayerActions, PlayerActionTypes} from './playerActions';
import PlayerDispatcher from './playerDispatcher'
import {remote as Remote} from 'electron';
const currentWindow = Remote.getCurrentWindow();


class PlayerStoreBase extends ReduceStore {
  constructor() {
    super(PlayerDispatcher);
  }

  static renderSize() {
    var {width, height} = currentWindow.getContentBounds();
    if (height > 100) {
      height -= 58;
    }
    return {width, height};
  }

  getInitialState() {
    return Immutable.Map({
      autoRotate: false,
      fov: 60,
      deviceId: null,
      renderSize: PlayerStoreBase.renderSize(),
    });
  }

  reduce(state, action) {
    switch (action.type) {
    case PlayerActionTypes.SetAutoRotate:
      return state.update('autoRotate', (old)=>{
        return action.autoRotate;
      });

    case PlayerActionTypes.SetFov:
      return state.update('fov', (old)=>{
        return action.fov;
      });

    case PlayerActionTypes.AttachDevice:
      return state.update('deviceId', (old)=>{
        return action.deviceId;
      });

    case PlayerActionTypes.UpdateRenderSize:
    return state.update('renderSize', (old)=>{
      return PlayerStoreBase.renderSize();
    });

    default:
      return state;
    }
  }
}

export default new PlayerStoreBase();
