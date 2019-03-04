import React, { Component, Fragment } from 'react';
//import React, { Fragment } from 'react';
import Tone from 'tone';

//this should be refactored to a functional component probably
// (I think it can probably still be)
class TrackPlayer extends Component {
  constructor(props){
    super(props)
    this.state = {
      rateSlider : "10",
      pitchSlider: "0",
      volumeSlider: "-60"
    }
    //I'm currently using a slider from 1 to 50 and dividing it by 10
    // meaning users can pick speeds between 0.1 and 5.0
    // one real easy way to implement reverse would be to make this value go negative I think

    let clipUrl = "https://upload.wikimedia.org/wikipedia/commons/1/1c/Guitare_electrique_arpege.ogg"
    this.player = new Tone.Player(clipUrl)
    let distortion = new Tone.Distortion(0.6)
    this.trackVolume = new Tone.Volume(-60)
    this.pitchShift = new Tone.PitchShift(0)
    // these are defaults, we can put these in the constructor to start them here
    // or in Event Handlers to let the user determine whatever details we want to give them
    // they CAN NOT go in render, because they get re-rendered any time there's a change
    // which means massive doubling, lagging, cutting out--it's bad
    this.player.autostart = true;
    this.player.loop = true;
    this.player.loopStart = 1;
    this.player.loopEnd=3;
    this.player.reverse=true;
    this.player.chain(this.trackVolume, this.pitchShift, distortion, Tone.Master)

  }

  handleRateSlide = (e) => {
    //console.log(e.target)
    this.setState({rateSlider : e.target.value})
    this.player.playbackRate = (this.state.rateSlider/10);
    //handleSlide is currently only wired up to the first slider on the page
  }

  handlePitchSlide = (e) => {
    //console.log(e.target)
    this.setState({pitchSlider : e.target.value})
    this.pitchShift.pitch = (this.state.pitchSlider);
  }

  handleVolumeSlide = (e) => {
    //console.log(e.target)
    this.setState({volumeSlider : e.target.value})
    this.trackVolume.volume.value = (this.state.volumeSlider);
    //handleSlide is currently only wired up to the first slider on the page
  }

  render(){
    //keep Tone events out of here--pass variables only
    return (
      <div className = "trackplayer">
        <div className="slidecontainer">
          <span>Play-Rate</span>
          <input type="range" min="1" max="50" value={this.state.rateSlider} className="slider" id="myRange" onChange= {this.handleRateSlide} />
        </div>
        <div className="slidecontainer">
          <span>Pitch</span>
          <input type="range" min="-12" max="12" value={this.state.pitchSlider} className="slider" id="myRange" onChange= {this.handlePitchSlide} />
        </div>
        <div className="slidecontainer">
          <span>Volume</span>
          <input type="range" min="-60" max="20" value={this.state.volumeSlider} className="slider" id="myRange" onChange= {this.handleVolumeSlide} />
        </div>
      </ div>
    )
  }
}

export default TrackPlayer;
