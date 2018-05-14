import React, { Component } from 'react';
import './App.css';
import Board from './containers/Board'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title"> The Dog Tinder!</h1>
        <Board />
      </div>
    );
  }
}

export default App;
