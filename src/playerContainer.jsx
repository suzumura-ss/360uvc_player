import {Container} from 'flux/utils';
import PlayerView from './playerView';
import PlayerStore from './playerStore';
import {PlayerActions, PlayerActionTypes} from './playerActions';


function getStores() {
  return [ PlayerStore ];
}

function getState() {
  return {
    // autoRotate(boolean)
    autoRotate: PlayerStore.getState().get('autoRotate'),
    onChangeAutoRotate: PlayerActions.setAutoRotate,

    // fov(value)
    fov: PlayerStore.getState().get('fov'),
    onChangeFov: PlayerActions.setFov,

    // attachDevice(deviceId)
    deviceId: PlayerStore.getState().get('deviceId'),
    onChangeDevice: PlayerActions.attachDevice,

    // updateRenderSize()
    renderSize: PlayerStore.getState().get('renderSize'),
    updateRenderSize: PlayerActions.updateRenderSize,
  };
}

export default Container.createFunctional(PlayerView, getStores, getState);
