import React, { Component } from 'react';
import './App.css';
import PlayerForm from './Containers/PlayerForm'
import SavedSongs from "./Containers/SavedSongs"
import FileLibrary from "./Containers/FileLibrary"

const URLAPI = 'http://localhost:3000/api/v1/urls'
const SONGAPI = 'http://localhost:3000/api/v1/songs'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      urls: [],
      songs: [],
      clicks: 0,
      track1 :{
        active: false,
        playRate: "10",
        pitchShift: "0",
        volumeLevel: "-60.0",
        trackIn: "0",
        trackOut: "0",
        name: "",
        url: "",
        length: "0"
      },
      track2 :{
        active: false,
        playRate: "10",
        pitchShift: "0",
        volumeLevel: "-60",
        trackIn: "0",
        trackOut: "0",
        name: "",
        url: "",
        length: "0"
      },
      track3 :{
        active: false,
        playRate: "10",
        pitchShift: "0",
        volumeLevel: "-60",
        trackIn: "0",
        trackOut: "0",
        name: "",
        url: "",
        length: "0"
      },
      track4 :{
        active: false,
        playRate: "10",
        pitchShift: "0",
        volumeLevel: "-60",
        trackIn: "0",
        trackOut: "0",
        name: "",
        url: "",
        length: "0"
      },
    }
  }

  componentDidMount() {
    fetch(URLAPI)
    .then(res => res.json())
    .then(urls => this.setState({urls: urls}))

    fetch(SONGAPI)
    .then(res => res.json())
    .then(songs => this.setState({songs: songs}))
  }

  handleVolumeSlide = (trackNum, e) => {
    // accesses tracks based on the trackNum prop passed down to each player
    let currentTrackState = {...this.state[`track${trackNum}`]}
    // creates a dummy object currentTrackState and replaces volumeLevel
    // with the value of the slider
    currentTrackState.volumeLevel = e.target.value
    this.setState({[`track${trackNum}`] : currentTrackState})
    // puts the dummy object back in place of the original state
    // this is repeated for all slider handlers
    // TODO: refactor into ONE handler that takes a relevant argument??
  }

  handleRateSlide = (trackNum, e) => {
    let currentTrackState = {...this.state[`track${trackNum}`]}
    currentTrackState.playRate = e.target.value
    this.setState({[`track${trackNum}`] : currentTrackState})
  }

  handlePitchSlide = (trackNum, e) => {
    let currentTrackState = {...this.state[`track${trackNum}`]}
    currentTrackState.pitchShift = e.target.value
    this.setState({[`track${trackNum}`] : currentTrackState})
  }

  handleInSlide = (trackNum, e) => {
    let currentTrackState = {...this.state[`track${trackNum}`]}
    currentTrackState.trackIn = e.target.value
    this.setState({[`track${trackNum}`] : currentTrackState})
  }

  handleOutSlide = (trackNum, e) => {
    let currentTrackState = {...this.state[`track${trackNum}`]}
    currentTrackState.trackOut = e.target.value
    this.setState({[`track${trackNum}`] : currentTrackState})
  }

  // Right now : incrememts a variable "clicks" when user presses add file
  // in FileLibrary——can't clear
  // Goal: file insertion changes "active" status of the first inactive track
  // clearing will make a track inactive
  //

  handleTrackClear = (e, trackNum) =>{
    console.log(e, trackNum)
    let resetTrack = {
      active: false,
      playRate: "10",
      pitchShift: "0",
      volumeLevel: "-60.0",
      trackIn: "0",
      trackOut: "0",
      name: "",
      url: "",
      length: "0"
    }
    // console.log(resetTrack)
    this.setState({[`track${trackNum}`] : resetTrack})
  }

  handleFileInsertionToTrackPlayer = (e) => {
    //console.log(this.state.clicks, e.target.dataset.url)
    this.setState({clicks: this.state.clicks+= 1})
    //console.log(this.state.clicks);
    //console.log(this.state[`track${this.state.clicks}`]);
    if(this.state.track1.active === false){
      let dummyTrack = {...this.state.track1}
      dummyTrack.active = true
      dummyTrack.url = e.target.dataset.url
      dummyTrack.name = e.target.dataset.name
      dummyTrack.length = e.target.dataset.length
      return this.setState({track1 : dummyTrack})
    }
    if(this.state.track2.active === false){
      let dummyTrack = {...this.state.track2}
      dummyTrack.active = true
      dummyTrack.url = e.target.dataset.url
      dummyTrack.name = e.target.dataset.name
      dummyTrack.length = e.target.dataset.length
      return this.setState({track2 : dummyTrack})
    }
    if(this.state.track3.active === false){
      let dummyTrack = {...this.state.track3}
      dummyTrack.active = true
      dummyTrack.url = e.target.dataset.url
      dummyTrack.name = e.target.dataset.name
      dummyTrack.length = e.target.dataset.length
      return this.setState({track3 : dummyTrack})
    }
    if(this.state.track4.active === false){
      let dummyTrack = {...this.state.track4}
      dummyTrack.active = true
      dummyTrack.url = e.target.dataset.url
      dummyTrack.name = e.target.dataset.name
      dummyTrack.length = e.target.dataset.length
      return this.setState({track4: dummyTrack})
    }

    // if(0 < this.state.clicks && this.state.clicks < 5){
    //   let currentSample = {...this.state[`track${this.state.clicks}`]}
    //   currentSample.active = true
    //   currentSample.url = e.target.dataset.url
    //   currentSample.name = e.target.dataset.name
    //   currentSample.length = e.target.dataset.length
    //   return this.setState({
    //     [`track${this.state.clicks}`]: currentSample
    //   })
    // }
    else {
      return null
    }
  }

  handleSongSave = (e) => {
    console.log('click', e);
  }

  render() {
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
            handleInSlide = {this.handleInSlide}
            handleOutSlide = {this.handleOutSlide}
            handleSongSave={this.handleSongSave}
            handleTrackClear = {this.handleTrackClear}
            />
          <FileLibrary
            urls={this.state.urls}
            handleFileInsertionToTrackPlayer={this.handleFileInsertionToTrackPlayer}
          />
          <SavedSongs
            tracks={this.state.tracks}
            songs={this.state.songs}
            songtracks={this.state.songtracks}
          />
      </div>
    );
  }

}

export default App;
