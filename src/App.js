import React, { Component } from 'react';
import './App.css';
import PlayerForm from './Containers/PlayerForm'
import SavedSongs from "./Containers/SavedSongs"
import FileLibrary from "./Containers/FileLibrary"

const URLAPI = 'http://localhost:3000/api/v1/urls'
const SONGAPI = 'http://localhost:3000/api/v1/songs'
const TRACKAPI = 'http://localhost:3000/api/v1/tracks'
const SONGTRACKAPI = 'http://localhost:3000/api/v1/songtracks'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      urls: [],
      songs: [],
      tracks: [],
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

  // lifecycle method to fetch all of the database info
  // and save it to state locally in the frontend
  componentDidMount() {
    fetch(URLAPI)
    .then(res => res.json())
    .then(urls => this.setState({urls: urls}))

    fetch(SONGAPI)
    .then(res => res.json())
    .then(songs => this.setState({songs: songs}))

    fetch(TRACKAPI)
    .then(res => res.json())
    .then(tracks => this.setState({tracks: tracks}))
  }

  // accesses track based on the trackNum prop passed down to each player
  // creates a dummy object currentTrackState and replaces volumeLevel
  // with the value of the slider
  // puts the dummy object back in place of the original state
  // this is repeated for all slider handlers
  handleVolumeSlide = (trackNum, e) => {
    let currentTrackState = {...this.state[`track${trackNum}`]}
    currentTrackState.volumeLevel = e.target.value
    this.setState({[`track${trackNum}`] : currentTrackState})
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

  // TODO: refactor into ONE handler that takes a relevant argument??
  // handleAnySlide = (trackNum, e) => {
  //   let currentTrackState = {...this.state[`track${trackNum}`]}
                // we can give sliders a slidertype??
                // or we can pass a param variable as an arg
  //   currentTrackState.[slidertype] = e.target. ...?
  //   this.setState({[`track${trackNum}`] : currentTrackState})
  // }

  // accepts a trackNum and resets the individual track to the original values
  // and removes it from local state
  // triggering a rerender of the individual track
  handleTrackClear = (e, trackNum) =>{
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
    this.setState({[`track${trackNum}`] : resetTrack})
  }

  // runs the above handleTrackClear 4x for the number of available tracks
  clearAllTracks = (e) =>{
    for (let i = 1; i <= 4 ; i++){
      this.handleTrackClear(e, i)
    }
  }

  // when a user deletes a track from the trackplayer, we assume they would
  // potentially like to replace that specific track with another
  // this finds the first empty slot in the player and returns it
  // so the return value can be used below in handleSendToPlayer
  findFirstEmptyTrack = () =>{
    for (let i=1 ; i <= 4 ; i++){
      if(this.state[`track${i}`].active === false){
        return i
      }
    }
    return null
  }

  // runs findFirstEmptyTrack, return value is a slot #
  // then creates track object and sets it in state in the given slot # 
  handleFileInsertionToTrackPlayer = (e) => {
    let empty = this.findFirstEmptyTrack()
    if(!!empty===false){
      return null
    } else {
      let dummyTrack = {...this.state[`track${empty}`]}
      dummyTrack.active = true
      dummyTrack.url = e.target.dataset.url
      dummyTrack.url_id = e.target.dataset.urlid
      dummyTrack.name = e.target.dataset.name
      dummyTrack.length = e.target.dataset.length
      return this.setState({[`track${empty}`] : dummyTrack})
    }
  }

  //these two methods, sending from file library and sending from song library
  // should be refactored into one method probably?

  // solve for now though: findFirstEmptyTrack should return a track num
  handleSendToPlayer = (e) => {
    // console.log(!!this.findFirstEmptyTrack()===false)
    this.clearAllTracks()
    for (let i=1 ; i<=4 ; i++){
      let newTrack = {...this.state[`track${i}`]}
      let foundUrl = this.state.urls.find((url) => {return url.id===e[i-1].url_id})
      newTrack.active = true;
      newTrack.length = foundUrl.length
      newTrack.name = e[i-1].name;
      newTrack.pitchShift = e[i-1].pitch;
      newTrack.playRate = e[i-1].tempo;
      newTrack.trackIn = e[i-1].in;
      newTrack.trackOut = e[i-1].out;
      newTrack.url = foundUrl.link
      newTrack.url_id = e[i-1].url_id;
      newTrack.volumeLevel = e[i-1].volume;
      // console.log(newTrack)
      this.setState({[`track${i}`] : newTrack})
    }
  }

  deleteSong = (song) => {
    console.log(song)
    fetch(SONGAPI + `/${song.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
    })
    .then(res => res.json())
    .then(deleted => console.log('deleted song trying to dependent destroy', deleted))
  }

  handleDelete = (e) => {
    // console.log("deleting!", e)
    //I added a dependent destroy on the backend so deleting a song deleted the associated songtracks and tracks when you delete a song so only one fetch needs to be made and removes the need for a Promise.all fn
    this.deleteSong(e)
    // now we need to remove it from the DOM
    // console.log('song state', this.state.songs);
    let newSongArray = this.state.songs.filter(song => song.id !== e.id)
    // console.log('updated', newSongArray);
    this.setState({
      songs: newSongArray
    })
  }

  handleSongName = (e) => {
    console.log(e.target.value);
    this.setState({songName: e.target.value})
    console.log(this.state.songName);
  }

  postSong = () => {
    return fetch(SONGAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: this.state.songName
      })
    })
    .then(res => res.json())
    // .then(song => this.setState({songs: [...this.state.songs, song]}))
  }

  //these can probably also be refactored into one method

  postTrack1 = () => {
    // console.log('postTrack1', this.state.track1)
    return fetch(TRACKAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
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
    .then(res => res.json())
    // .then(
    //   track => this.setState({tracks: [...this.state.tracks, track]},
    //   () => { console.log('after tracks setState: ', this.state.tracks) } )
    // )
  }

  postTrack2 = () => {
    // console.log('postTrack2', this.state.track2);
    return fetch(TRACKAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
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
    .then(res => res.json())
    // .then(track => this.setState({tracks: [...this.state.tracks, track]}, () => { console.log('postTrack2', track) }))
  }

  postTrack3 = () => {
    // console.log('postTrack3', this.state.track3);
    return fetch(TRACKAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
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
    .then(res => res.json())
    // .then(track => this.setState({tracks: [...this.state.tracks, track]}, () => { console.log('postTrack3', track) }))
  }

  postTrack4 = () => {
    // console.log('postTrack4', this.state.track4);
    return fetch(TRACKAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
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
    .then(res => res.json())
    // .then(track => this.setState({tracks: [...this.state.tracks, track]}, () => { console.log('postTrack4', track) }))
  }

  postSongTrack1 = () => {
    console.log('postSongTrack1', this.state.songs.length, this.state.tracks.length,  this.state.songs[this.state.songs.length - 1].id, this.state.tracks[this.state.tracks.length - 4].id);
    fetch(SONGTRACKAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "song_id": this.state.songs[this.state.songs.length -1 ].id,
        "track_id": this.state.tracks[this.state.tracks.length -4].id
      })
    })
  }

  postSongTrack2 = () => {
    fetch(SONGTRACKAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "song_id": this.state.songs[this.state.songs.length -1 ].id,
        "track_id": this.state.tracks[this.state.tracks.length -3].id
      })
    })
  }

  postSongTrack3 = () => {
    fetch(SONGTRACKAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "song_id": this.state.songs[this.state.songs.length -1 ].id,
        "track_id": this.state.tracks[this.state.tracks.length -2].id
      })
    })
  }

  postSongTrack4 = () => {
    fetch(SONGTRACKAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "song_id": this.state.songs[this.state.songs.length -1 ].id,
        "track_id": this.state.tracks[this.state.tracks.length -1].id
      })
    })
  }

  madFetches = (e) => {
    e.preventDefault()
    Promise.all([this.postSong(), this.postTrack1(), this.postTrack2(), this.postTrack3(), this.postTrack4()])
    .then( data => {
      // console.log('promises.all', data)
      this.setState({
        songs: [...this.state.songs, data[0]],
        tracks: [...this.state.tracks, data[1], data[2], data[3], data[4]]
      })
      // console.log(this.state);
    } )
    .then(() => this.postSongTrack1())
    .then(() => this.postSongTrack2())
    .then(() => this.postSongTrack3())
    .then(() => this.postSongTrack4())
  }

  render() {
    console.log('song state', this.state.songs);
    return (
      <div className="mainapp">
          <div className="header">mixlr~~~</div>
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
            madFetches={this.madFetches}
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
            handleSendToPlayer={this.handleSendToPlayer}
            handleDelete={this.handleDelete}
          />
      </div>
    );
  }

}

export default App;
