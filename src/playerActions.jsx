import PlayerDispatcher from './playerDispatcher'


export const PlayerActionTypes = {
  AttachDevice: 'ATTACH_DEVICE',
  SetAutoRotate: 'SET_AUTO_ROTATE',
  SetFov: 'SET_FOV',
  UpdateRenderSize: 'UPDATE_RENDER_SIZE',
}


export class PlayerActions {
  static attachDevice(deviceId) {
    PlayerDispatcher.dispatch({type: PlayerActionTypes.AttachDevice, deviceId});
  }

  static setAutoRotate(autoRotate) {
    PlayerDispatcher.dispatch({type: PlayerActionTypes.SetAutoRotate, autoRotate});
  }

  static setFov(fov) {
    PlayerDispatcher.dispatch({type: PlayerActionTypes.SetFov, fov});
  }

  static updateRenderSize() {
    PlayerDispatcher.dispatch({type: PlayerActionTypes.UpdateRenderSize});
  }
}
