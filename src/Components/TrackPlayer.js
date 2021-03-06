import React, { Component } from 'react';
import Tone from 'tone';

//this should be refactored to a functional component probably
// (I think it can probably still be)
class TrackPlayer extends Component {

  constructor(props){
    super(props)
    let clipUrl = ""

    this.player = new Tone.Player(clipUrl)
    this.trackVolume = new Tone.Volume(-60.0)
    this.pitchShift = new Tone.PitchShift(0)
    // These are defaults: they belong in constructor
    // so the card object has an existing Tone object that event handlers change

    // They CAN NOT go in render, because any change will re-render
    // and add new Tone objects every time
    // which means tons of matching tracks, lagging, cutting out--it's bad

    // However this is causing some sort of buffer issue I don't understand yet

    this.player.autostart = true;
    this.player.loop = true;
    this.player.loopStart = 1;
    this.player.loopEnd=3;
    // these defaults do conflict with the state, but it's not really an issue
    // because they're not usable like this
    this.player.reverse=false;
    this.player.chain(this.trackVolume, this.pitchShift, Tone.Master)

  }
  // //THESE are about to be moved to App - they will look for the track that matches trackNum
  // // and change the state up there
  // // they can also be refactored into ONE function that receives trackNum and sliderType
  // // if it also converts its output based on which state obj it's passing to


  componentDidUpdate(prevProps){
    if (prevProps.track.volumeLevel !== this.props.track.volumeLevel){
      let volumeFloat = parseFloat(this.props.track.volumeLevel)
      this.trackVolume.volume.value = volumeFloat
    }

    if (prevProps.track.playRate !== this.props.track.playRate){
      let rateFloat = parseFloat(this.props.track.playRate/10)
      this.player.playbackRate = rateFloat
    }

    // ERRORING
    if (prevProps.track.pitchShift !== this.props.track.pitchShift){
      let pitchFloat = parseFloat(this.props.track.pitchShift)
      this.pitchShift.pitch = pitchFloat
    }
    // if (prevProps.track.length !== this.props.track.length){
    //   console.log("success")
    // }
    // above commented out because I think it can all be handled within URLchange
    // might be solved by state change?
    if (prevProps.track.url !== this.props.track.url){
      if (this.props.track.url === ""){
        this.player.stop()
      }
      this.player.load(this.props.track.url)
    }

    if (prevProps.track.trackIn !== this.props.track.trackIn){
      let inFloat = parseFloat(this.props.track.trackIn)
      this.player.loopStart = inFloat
      this.player.restart()
    }

    if (prevProps.track.trackOut !== this.props.track.trackOut){
      let outFloat = parseFloat(this.props.track.trackOut)
      this.player.loopEnd = outFloat
    }

    if (this.props.track.trackOut < this.props.track.trackIn){
      this.player.loopStart = this.props.track.trackOut
      this.player.loopEnd = this.props.track.trackIn
      this.player.reverse = true;
      this.player.restart()
    }

    if (this.props.track.trackOut > this.props.track.trackIn){
      this.player.loopStart = this.props.track.trackIn
      this.player.loopEnd = this.props.track.trackOut
      this.player.reverse = false;
    }
  }

  handleInSlide= (e) => {
    this.setState({inSlider : e.target.value})
    this.player.loopStart = (this.state.inSlider);
  }

  handleOutSlide= (e) => {
    this.setState({outSlider : e.target.value})
    this.player.loopEnd = (this.state.outSlider);
  }

  //KEEP TONE EVENTS OUT OF HERE
  render(){
    return (
      <div className = "trackplayer" id={this.props.track.active ? "active" : "inactive"}>
        <div className = {this.props.track.active ? "tracklabel" : "inactivetracklabel"}>{this.props.track.active ? this.props.track.name : "empty track"}</div>
        <button
          onClick={(e) => this.props.handleTrackClear(this.props.trackNum, e)}
          className={this.props.track.active ? "clearBtn" : "inactiveClearBtn"}
          >Clear</button>

      <div className="slidecontainer">
        <div className= "sliderlabel">Play-Rate</div>
        <input
          type="range" className="slider" id="rate"
          min="1" max="50" defaultValue="10"
          value={this.props.playRate}
          onChange= {(e) => this.props.handleRateSlide(this.props.trackNum,e)}
        />
      </div>

        <div className="slidecontainer">
          <div className= "sliderlabel">Pitch</div>
          <input
            type="range" className="slider" id="pitch"
            min="-12" max="12" defaultValue= "0"
            value={this.props.pitchShift}
            onChange= {(e) => this.props.handlePitchSlide(this.props.trackNum,e)}
          />
        </div>

        <div className="slidecontainer">
          <div className= "sliderlabel">Volume</div>
          <input
            type="range" className="slider" id="volume"
            min="-60" max="20"
            value={this.props.track.volumeLevel}
            onChange={(e) => this.props.handleVolumeSlide(this.props.trackNum,e)}
          />
        </div>

        <div className="slidecontainer" id="iocontainer">
          <div className= "sliderlabel">In-Out</div>
          <input
            type="range" className="ioslider" id="in"
            min="0" max={this.props.track.length} defaultValue="0" step="0.1"
            value={this.props.trackIn}
            onChange={(e) => this.props.handleInSlide(this.props.trackNum,e)}
          />
          <input
            type="range" className="ioslider" id="out"
            min="0" max={this.props.track.length} defaultValue="4" step="0.1"
            value={this.props.trackOut}
            onChange={(e) => this.props.handleOutSlide(this.props.trackNum,e)}
          />
          <div id="iolabel">{parseFloat(this.props.track.trackIn).toFixed(1).padStart(4,"0")} - {parseFloat(this.props.track.trackOut).toFixed(1).padStart(4,"0")}</div>
        </div>
      </div>
    )
  }
}

export default TrackPlayer;
