import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PlayerForm from './Containers/PlayerForm'
import SavedSongs from "./Containers/SavedSongs"
import FileLibrary from "./Containers/FileLibrary"

const URLAPI = 'http://localhost:3000/api/v1/urls'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      urls: [],
      clicks: 0,
      track1 :{
        active: false,
        playRate: "10",
        pitchShift: "0",
        volumeLevel: "-60.0",
        trackIn: "0",
        trackOut: "0",
        name: "",
        url: ""
      },
      track2 :{
        active: false,
        playRate: "10",
        pitchShift: "0",
        volumeLevel: "-60",
        trackIn: "0",
        trackOut: "0",
        name: "",
        url: ""
      },
      track3 :{
        active: false,
        playRate: "10",
        pitchShift: "0",
        volumeLevel: "-60",
        trackIn: "0",
        trackOut: "0",
        name: "",
        url: ""
      },
      track4 :{
        active: false,
        playRate: "10",
        pitchShift: "0",
        volumeLevel: "-60",
        trackIn: "0",
        trackOut: "0",
        name: "",
        url: ""
      },
    }
  }

  componentDidMount() {
    fetch(URLAPI)
    .then(res => res.json())
    .then(urls => this.setState({urls: urls}))
  }

  handleVolumeSlide = (trackNum, e) => {
    //return this.state[`track${trackNum}`].volumeLevel
    console.log(e.target.value)
    console.log(this.state[`track${trackNum}`].volumeLevel)
    let currentTrackState = {...this.state[`track${trackNum}`]}
    currentTrackState.volumeLevel = e.target.value
    console.log("currentTrackState", currentTrackState)
    this.setState({[`track${trackNum}`] : currentTrackState})
  }

  handleRateSlide = (trackNum, e) => {
    return null
  }

  handlePitchSlide = (trackNum, e) => {
    return null
  }

  handleFileInsertionToTrackPlayer = (e) => {
    console.log(this.state.clicks, e.target.dataset.url)
    this.setState({clicks: this.state.clicks+= 1})
    console.log(this.state.clicks);
    console.log(this.state[`track${this.state.clicks}`]);
    if(this.state.clicks === 1){
      let currentSample = {...this.state[`track${this.state.clicks}`]}
      currentSample.url = e.target.dataset.url
      currentSample.name = e.target.dataset.name
      return this.setState({
        [`track${this.state.clicks}`]: currentSample
      })
    } else if(this.state.clicks === 2){
      let currentSample = {...this.state[`track${this.state.clicks}`]}
      currentSample.url = e.target.dataset.url
      currentSample.name = e.target.dataset.name
      return this.setState({
        [`track${this.state.clicks}`]: currentSample
      })
    } else if(this.state.clicks === 3){
      let currentSample = {...this.state[`track${this.state.clicks}`]}
      currentSample.url = e.target.dataset.url
      currentSample.name = e.target.dataset.name
      return this.setState({
        [`track${this.state.clicks}`]: currentSample
      })
    } else if(this.state.clicks === 4){
      let currentSample = {...this.state[`track${this.state.clicks}`]}
      currentSample.url = e.target.dataset.url
      currentSample.name = e.target.dataset.name
      return this.setState({
        [`track${this.state.clicks}`]: currentSample
      })
    } else {
      return null
    }
  }

  render() {
    //console.log(this.state[`track${1}`].volumeLevel)
    // ^ works
    return (
      <div className="mainapp">
          <PlayerForm
            track1 = {this.state.track1}
            track2 = {this.state.track2}
            track3 = {this.state.track3}
            track4 = {this.state.track4}
            handleVolumeSlide = {this.handleVolumeSlide}
            handleRateSlide = {this.handleRateSlide}
            handlePitchSlide = {this.handlePitchSlide}
            />
          <FileLibrary
            urls={this.state.urls}
            handleFileInsertionToTrackPlayer={this.handleFileInsertionToTrackPlayer}
          />
          <SavedSongs />
      </div>
    );
  }

}

export default App;
