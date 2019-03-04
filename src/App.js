import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PlayerForm from './Containers/PlayerForm'
import SavedSongs from "./Containers/SavedSongs"
import FileLibrary from "./Containers/FileLibrary"

class App extends Component {
  render() {
    return (
      <div className="mainapp">
          <PlayerForm />
          <FileLibrary />
          <SavedSongs />
      </div>
    );
  }
}

export default App;
