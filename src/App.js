import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PlayerForm from './Containers/PlayerForm'
import TrackPlayer from './Components/TrackPlayer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <PlayerForm />
        </header>
      </div>
    );
  }
}

export default App;
