import React from 'react';
import ReactDOM from 'react-dom';
import PlayerContainer from './js/playerContainer';
import {remote as Remote} from 'electron';


const currentWindow = Remote.getCurrentWindow();
class Application extends PlayerContainer {
  constructor() {
    super();
    currentWindow.application = this;
  }

  updateDimensions() {
    // currentWindow.addListener('resize') 経由時に this が　Window になる.
    currentWindow.application.state.updateRenderSize();
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
}


ReactDOM.render(
  <Application />,
  document.getElementById('application')
);
