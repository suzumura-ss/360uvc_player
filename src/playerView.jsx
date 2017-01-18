import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import DeviceSelector from './deviceSelector';
import CameraControll from './cameraControll'
import SphereRender from './sphereRender';


function PlayerView(props) {
  return (
    <div>
      <Navbar>
        <Nav className='deviceSelector'>
          <DeviceSelector deviceId={props.deviceId} onChangeDevice={props.onChangeDevice} />
        </Nav>
        <Nav>
          <CameraControll autoRotate={props.autoRotate} onChangeAutoRotate={props.onChangeAutoRotate} fov={props.fov} onChangeFov={props.onChangeFov} />
        </Nav>
      </Navbar>
      <SphereRender autoRotate={props.autoRotate} fov={props.fov} renderSize={props.renderSize} deviceId={props.deviceId} />
    </div>
  );
}

export default PlayerView;
