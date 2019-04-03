import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';

class App extends Component {
  render() {
    return (
        <StyleRoot>
          <div className="App">
            <h1>Benjamín Aceval Plant Database</h1>
          </div>
        </StyleRoot>
    );
  }
}

export default Radium(App);
