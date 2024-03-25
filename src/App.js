import 'aframe'
import React, {Component} from 'react'
// my-app.js
require('aframe-physics-system');
require('aframe-physics-extras');

class App extends Component {
  render () {
    return (
      <a-scene>
        <a-sky color="#3333aa"/>
        <a-box position="0 0 -5" color="#563421"/>
      </a-scene>
    );
  }
}

export default App;