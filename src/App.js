import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TrackPlayer from './Components/TrackPlayer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <TrackPlayer />
        </header>
      </div>
    );
  }
}

export default App;
