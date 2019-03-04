import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PlayerForm from './Containers/PlayerForm'
import SavedSongs from "./Containers/SavedSongs"
import FileLibrary from "./Containers/FileLibrary"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      track1 :{
        active: false,
        playRate: "10",
        pitchShift: "0",
        volumeLevel: "-60",
        trackIn: "0",
        trackOut: "0",
        url: ""
      }
    }
  }

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
