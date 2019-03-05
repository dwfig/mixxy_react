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
      volumeSlider: "-60.0",
      inSlider: "20",
      outSlider: "40"
    }
    //I'm currently using a slider from 1 to 50 and dividing it by 10
    // meaning users can pick speeds between 0.1 and 5.0
    // one real easy way to implement reverse would be to make this value go negative I think

    let clipUrl = "https://upload.wikimedia.org/wikipedia/commons/1/1c/Guitare_electrique_arpege.ogg"
    this.player = new Tone.Player(clipUrl)
    let distortion = new Tone.Distortion(0.6)
    this.trackVolume = new Tone.Volume(-60.0)
    //this.trackVolume.volume.value = this.props.volumeLevel
    //not convinced this line is right -- ERRORS HARD
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
  //THESE are about to be moved to App - they will look for the track that matches trackNum
  // and change the state up there
  // they can also be refactored into ONE function that receives trackNum and sliderType
  // if it also converts its output based on which state obj it's passing to

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

  // handleVolumeSlide = (e) => {
  //   //console.log(e.target)
  //   this.setState({volumeSlider : e.target.value})
  //   this.trackVolume.volume.value = (this.state.volumeSlider);
  //   //handleSlide is currently only wired up to the first slider on the page
  // }
  localVolumeSlide(){
    //console.log("a ",this.trackVolume.volume.value)
    let volumeFloat = parseFloat(this.props.track.volumeLevel)
    //console.log("volumeFloat ",typeof volumeFloat, volumeFloat)
    this.trackVolume.volume.value = volumeFloat
  }

  handleInSlide= (e) =>{
    this.setState({inSlider : e.target.value})
    this.player.loopStart = (this.state.inSlider);
  //  console.log(e.target.value, this.state.inSlider)
  }

  handleOutSlide= (e) =>{
    this.setState({outSlider : e.target.value})
    this.player.loopEnd = (this.state.outSlider);
  //  console.log(e.target.value, this.state.outSlider)
  }

  render(){
    //console.log("c ",this.props)
    //keep Tone events out of here--pass variables only
    //console.log("track ", this.props.trackNum, this.props.track)
    //console.log(this.props.handleVolumeSlide)
    //this.localVolumeSlide()
    return (
      <div className = "trackplayer">
        <div className="slidecontainer">
          <div className= "sliderlabel">Play-Rate</div>
          <input type="range" min="1" max="50" value={this.state.rateSlider} className="slider" id="rate" onChange= {this.handleRateSlide} />
        </div>
        <div className="slidecontainer">
          <div className= "sliderlabel">Pitch</div>
          <input type="range" min="-12" max="12" value={this.state.pitchSlider} className="slider" id="pitch" onChange= {this.handlePitchSlide} />
        </div>
        <div className="slidecontainer">
          <div className= "sliderlabel">Volume</div>
          <input type="range" min="-60" max="20" value={this.props.volumeLevel} className="slider" id="volume" onChange={this.localVolumeSlide(), (e) => this.props.handleVolumeSlide(this.props.trackNum,e)} />
        </div>
        <div className="slidecontainer" id="iocontainer">
          <div className= "sliderlabel">In-Out</div>
          <input type="range" min="0" max="50" value={this.state.inSlider} step="0.5" className="ioslider" id="in" onChange={this.handleInSlide} />
          <input type="range" min="0" max="50" value={this.state.outSlider} step="0.5" className="ioslider" id="out" onChange={this.handleOutSlide} />
          <div id="iolabel">0:00 - 0:00</div>
        </div>
      </ div>
    )
  }
}

export default TrackPlayer;
