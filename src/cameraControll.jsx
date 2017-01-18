import React from 'react';
import Switch from 'react-bootstrap-switch';
import {Navbar, InputGroup, FormControl, Button} from 'react-bootstrap';
import ReactSliderNativeBootstrap from 'react-bootstrap-native-slider';


export default class CameraControll extends React.Component {
  onAutoRotateChanged(ev) {
    this.props.onChangeAutoRotate(ev.value());
  }

  onFovChanged(ev) {
    const value = parseInt(ev.target.value);
    if (!isNaN(value) && value >= 10 && value <= 100) {
      this.props.onChangeFov(value);
    }
  }

  onReset() {
    this.props.onChangeFov(this.defaults.fov);
  }

  render() {
    if (!this.defaults) {
      this.defaults = {
        fov: this.props.fov
      };
    }
    return (<Navbar.Form pullLeft>
      <Switch labelText='rotate' defaultValue={this.props.autoRotate} onChange={(e)=>this.onAutoRotateChanged(e)} />
      {' '}
      <InputGroup>
        <InputGroup.Addon>FOV</InputGroup.Addon>
        <FormControl ref='fovSlider' className='fov' type='range' min={10} max={100} value={this.props.fov} onChange={(e)=>this.onFovChanged(e)} />
        <InputGroup.Addon style={{width: 4+'em'}}>{this.props.fov}</InputGroup.Addon>
        <InputGroup.Button>
          <Button onClick={()=>this.onReset()} ><i className='glyphicon glyphicon-refresh' aria-hidden='true'></i></Button>
        </InputGroup.Button>
      </InputGroup>
    </Navbar.Form>);
  }
}
