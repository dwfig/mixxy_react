import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PlayerForm from './Containers/PlayerForm'
import SavedSongs from "./Containers/SavedSongs"
import FileLibrary from "./Containers/FileLibrary"

const URLAPI = 'http://localhost:3000/api/v1/urls'

class App extends Component {

  constructor() {
    super()

    this.state = {
      urls: []
    }
  }

  componentDidMount() {
    fetch(URLAPI)
    .then(res => res.json())
    .then(urls => this.setState({urls: urls}))
  }

  render() {
    // console.log(this.state.urls);
    return (
      <div className="mainapp">
          <PlayerForm />
          <FileLibrary urls={this.state.urls}/>
          <SavedSongs />
      </div>
    );
  }
}

export default App;
