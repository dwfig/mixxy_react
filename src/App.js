import React, { Component } from 'react';
import './App.css';
import PlayerForm from './Containers/PlayerForm'
import SavedSongs from "./Containers/SavedSongs"
import FileLibrary from "./Containers/FileLibrary"

const URLAPI = 'http://localhost:3000/api/v1/urls'
const SONGAPI = 'http://localhost:3000/api/v1/songs'
const TRACKAPI = 'http://localhost:3000/api/v1/tracks'
// const SONGTRACKAPI = 'http://localhost:3000/api/v1/songtracks'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      urls: [],
      songs: [],
      clicks: 0,
      songName: "",
      track1 :{
        active: false,
        playRate: "10",
        pitchShift: "0",
        volumeLevel: "-60.0",
        trackIn: "0",
        trackOut: "0",
        name: "",
        url_id: 0,
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
        url_id: 0,
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
        url_id: 0,
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
        url_id: 0,
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
    // console.log("currentTrackState", currentTrackState)
    // console.log("currentTrackState", currentTrackState)
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

  handleFileInsertionToTrackPlayer = (e) => {
    console.log(this.state.clicks, e.target.dataset.url)
    this.setState({clicks: this.state.clicks+= 1})
    console.log(this.state.clicks);
    console.log(this.state[`track${this.state.clicks}`]);

    if(0 < this.state.clicks && this.state.clicks < 5){
      let currentSample = {...this.state[`track${this.state.clicks}`]}
      currentSample.url = e.target.dataset.url
      currentSample.url_id = e.target.dataset.urlid
      currentSample.name = e.target.dataset.name
      currentSample.length = e.target.dataset.length
      return this.setState({
        [`track${this.state.clicks}`]: currentSample
      })
    } else {
      return null
    }
  }

  handleSongName = (e) => {
    console.log(e.target.value);
    this.setState({songName: e.target.value})
    console.log(this.state.songName);
  }

  postTrack1 = () => {
    console.log(this.state.track1);
    fetch(TRACKAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "name": this.state.track1.name,
          "url_id": this.state.track1.url_id,
          "track_number": 1,
          "in": this.state.track1.trackIn,
          "out": this.state.track1.trackOut,
          "tempo": this.state.track1.playRate,
          "volume": this.state.track1.volumeLevel,
          "pitch": this.state.track1.pitchShift
        })
      })
  }

  postTrack2 = () => {
    console.log(this.state.track2);
    fetch(TRACKAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "name": this.state.track2.name,
          "url_id": this.state.track2.url_id,
          "track_number": 2,
          "in": this.state.track2.trackIn,
          "out": this.state.track2.trackOut,
          "tempo": this.state.track2.playRate,
          "volume": this.state.track2.volumeLevel,
          "pitch": this.state.track2.pitchShift
        })
      })
  }

  postTrack3 = () => {
    console.log(this.state.track3);
    fetch(TRACKAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "name": this.state.track3.name,
          "url_id": this.state.track3.url_id,
          "track_number": 3,
          "in": this.state.track3.trackIn,
          "out": this.state.track3.trackOut,
          "tempo": this.state.track3.playRate,
          "volume": this.state.track3.volumeLevel,
          "pitch": this.state.track3.pitchShift
        })
      })
  }

  postTrack4 = () => {
    console.log(this.state.track4);
    fetch(TRACKAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "name": this.state.track4.name,
          "url_id": this.state.track4.url_id,
          "track_number": 4,
          "in": this.state.track4.trackIn,
          "out": this.state.track4.trackOut,
          "tempo": this.state.track4.playRate,
          "volume": this.state.track4.volumeLevel,
          "pitch": this.state.track4.pitchShift
        })
      })
  }

  handleSaveSongs = () => {
    // console.log('click save', this.state.song_name);
    fetch(SONGAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.songName,

      })
    })
    .then(() => this.postTrack1())
    .then(() => this.postTrack2())
    .then(() => this.postTrack3())
    .then(() => this.postTrack4())

  }

  render() {
    // console.log(this.state.songs, this.state.urls);
    //console.log(this.state[`track${1}`].volumeLevel)
    // ^ works
    console.log(this.state)
    return (
      <div className="mainapp">
          <PlayerForm
            track1 = {this.state.track1}
            track2 = {this.state.track2}
            track3 = {this.state.track3}
            track4 = {this.state.track4}
            song_name = {this.state.songName}
            handleVolumeSlide = {this.handleVolumeSlide}
            handleRateSlide = {this.handleRateSlide}
            handlePitchSlide = {this.handlePitchSlide}
            handleInSlide = {this.handleInSlide}
            handleOutSlide = {this.handleOutSlide}
            handleSaveSongs={this.handleSaveSongs}
            handleSongName={this.handleSongName}
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
