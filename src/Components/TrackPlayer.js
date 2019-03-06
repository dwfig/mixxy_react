import React, { Component } from 'react';
//import React, { Fragment } from 'react';
import Tone from 'tone';

//this should be refactored to a functional component probably
// (I think it can probably still be)
class TrackPlayer extends Component {
  constructor(props){
    super(props)
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
    this.player.reverse=false;
    this.player.chain(this.trackVolume, this.pitchShift, distortion, Tone.Master)

  }
  // //THESE are about to be moved to App - they will look for the track that matches trackNum
  // // and change the state up there
  // // they can also be refactored into ONE function that receives trackNum and sliderType
  // // if it also converts its output based on which state obj it's passing to
  //
  // handleRateSlide = (e) => {
  //   //console.log(e.target)
  //   this.setState({rateSlider : e.target.value})
  //   this.player.playbackRate = (this.state.rateSlider/10);
  //   //handleSlide is currently only wired up to the first slider on the page
  // }
<<<<<<< HEAD

  // handlePitchSlide = (e) => {
  //   //console.log(e.target)
  //   this.setState({pitchSlider : e.target.value})
  //   this.pitchShift.pitch = (this.state.pitchSlider);
  // }

  componentDidUpdate(prevProps){
    //console.log("componentDidUpdate",prevProps.track, this.props.track)
    if (prevProps.track.volumeLevel !== this.props.track.volumeLevel){
      // console.log("hit", prevProps.track.volumeLevel, this.props.track.volumeLevel)
      let volumeFloat = parseFloat(this.props.track.volumeLevel)
      this.trackVolume.volume.value = volumeFloat
    }
    if (prevProps.track.playRate !== this.props.track.playRate){
      //console.log("hit", prevProps.track.playRate, this.props.track.playRate)
      let rateFloat = parseFloat(this.props.track.playRate/10)
      this.player.playbackRate = rateFloat
    }
    if (prevProps.track.pitchShift !== this.props.track.pitchShift){
      //console.log("hit", prevProps.track.pitchShift, this.props.track.pitchShift)
      let pitchFloat = parseFloat(this.props.track.pitchShift)
      this.pitchShift.pitch = pitchFloat
    }
    // if (prevProps.track.length !== this.props.track.length){
    //   console.log("success")
    // }
    // above commented out because I think it can all be handled within URLchange
    if (prevProps.track.url !== this.props.track.url){
      console.log('yes')
      this.player.load(this.props.track.url)
    }
    if (prevProps.track.trackIn !== this.props.track.trackIn){
      let inFloat = parseFloat(this.props.track.trackIn)
      this.player.loopStart = inFloat
    }
    if (prevProps.track.trackOut !== this.props.track.trackOut){
      let outFloat = parseFloat(this.props.track.trackOut)
      this.player.loopEnd = outFloat
    }
    if (this.props.track.trackOut < this.props.track.trackIn){
      this.player.loopStart = this.props.track.trackOut
      this.player.loopEnd = this.props.track.trackIn
      this.player.reverse = true;
    }
    if (this.props.track.trackOut > this.props.track.trackIn){
      this.player.loopStart = this.props.track.trackIn
      this.player.loopEnd = this.props.track.trackOut
      this.player.reverse = false;
    }
=======
  localVolumeSlide(){
    // console.log("a ",this.trackVolume.volume.value)
    let volumeFloat = parseFloat(this.props.track.volumeLevel)
    // console.log("volumeFloat ",typeof volumeFloat, volumeFloat)
    this.trackVolume.volume.value = volumeFloat
>>>>>>> clear_btn2
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
<<<<<<< HEAD
    //console.log("c ",this.props)
=======
    // console.log("c ",this.props)
>>>>>>> clear_btn2
    //keep Tone events out of here--pass variables only
    //console.log("track ", this.props.trackNum, this.props.track)
    //console.log(this.props.handleVolumeSlide)
    // console.log(this.props.handleRateSlide)
    //this.localVolumeSlide()
    return (
      <div className = "trackplayer">
        <div>{this.props.track.name}</div>

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
            min="-60" max="20" defaultValue = "-60"
            value={this.props.volumeLevel}
            onChange={(e) => this.props.handleVolumeSlide(this.props.trackNum,e)}
            />
        </div>

        <div className="slidecontainer" id="iocontainer">
          <div className= "sliderlabel">In-Out</div>
          <input
            type="range" className="ioslider" id="in"
            min="0" max="50" defaultValue="1" step="0.1"
            value={this.props.trackIn}
            onChange={(e) => this.props.handleInSlide(this.props.trackNum,e)}
            />
          <input
            type="range" className="ioslider" id="out"
            min="0" max="50" defaultValue="4" step="0.1"
            value={this.props.trackOut}
            onChange={(e) => this.props.handleOutSlide(this.props.trackNum,e)}
            />
          <div id="iolabel">0:00 - 0:00</div>
        </div>
        <button className="clearBtn">Clear</button>
      </ div>
    )
  }
}

export default TrackPlayer;
