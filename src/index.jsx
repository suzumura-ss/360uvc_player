import React from 'react';
import ReactDOM from 'react-dom';
import {remote as Remote} from 'electron';
import {Navbar, Nav} from 'react-bootstrap';

import SphereRender from './js/sphereRender';
import DeviceSelector from './js/deviceSelector';
import CameraControll from './js/cameraControll'


const currentWindow = Remote.getCurrentWindow();
class Application extends React.Component {
  constructor() {
    super();
    currentWindow.application = this;
    const {width, height} = this.renderSize();
    this.state = {width, height, autoRotate: false};
  }

  setAutoRotate(value) {
    this.setState((prevState, props)=>{
      return {autoRotate: value};
    });
  }

  attachDevice(deviceId) {
    this.refs.sphereRender.attachDevice(deviceId);
  }

  renderSize(resize) {
    var {width, height} = currentWindow.getContentBounds();
    if (height > 100) {
      height -= 58;
    }
    return {width, height};
  }

  updateDimensions() {
    // currentWindow.addListener('resize') 経由時に this が　Window になる.
    currentWindow.application.setState((prevState, props)=>{
      const {width, height} = currentWindow.application.renderSize(true);
      return {width, height};
    });
  }
  componentWillMount() {
    this.updateDimensions();
  }
  componentDidMount() {
    currentWindow.addListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    currentWindow.removeListener('resize', this.updateDimensions);
  }

  render() {
    return (
      <div>
        <Navbar>
          <Nav>
            <DeviceSelector ref='deviceSelector' application={this} />
            <CameraControll autoRotate={this.state.autoRotate} application={this} />
          </Nav>
        </Navbar>
        <SphereRender ref='sphereRender' autoRotate={this.state.autoRotate} width={this.state.width} height={this.state.height} />
      </div>
    );
  }
}


ReactDOM.render(
  <Application />,
  document.getElementById('application')
);
