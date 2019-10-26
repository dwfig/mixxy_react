import React, { Component } from 'react';
import TrackPlayer from "../Components/TrackPlayer"

class PlayerForm extends Component {
  // might be refactored into functional component
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    // console.log("player form ", this.state)
    return (
      <div className = "playerform">
        <form>
          <div id= "playerformlabel">Song Name:</div>
          <input id="playerformfield" type="text" name="songname" value={this.props.song_name} onChange={(e) => this.props.handleSongName(e)}/>
          <button id="playerformbutton" onClick={this.props.madFetches}>Save Song</button>
        </form>
        <TrackPlayer
          track = {this.props.track1}
          trackNum = {1}
          handleVolumeSlide={this.props.handleVolumeSlide}
          handleRateSlide={this.props.handleRateSlide}
          handlePitchSlide={this.props.handlePitchSlide}
          handleInSlide = {this.props.handleInSlide}
          handleOutSlide = {this.props.handleOutSlide}
          handleTrackClear = {this.props.handleTrackClear}
          />
        <TrackPlayer
          track = {this.props.track2}
          trackNum = {2}
          handleVolumeSlide={this.props.handleVolumeSlide}
          handleRateSlide={this.props.handleRateSlide}
          handlePitchSlide={this.props.handlePitchSlide}
          handleInSlide = {this.props.handleInSlide}
          handleOutSlide = {this.props.handleOutSlide}
          handleTrackClear = {this.props.handleTrackClear}
          />
        <TrackPlayer
          track = {this.props.track3}
          trackNum = {3}
          handleVolumeSlide={this.props.handleVolumeSlide}
          handleRateSlide={this.props.handleRateSlide}
          handlePitchSlide={this.props.handlePitchSlide}
          handleInSlide = {this.props.handleInSlide}
          handleOutSlide = {this.props.handleOutSlide}
          handleTrackClear = {this.props.handleTrackClear}
          />
        <TrackPlayer
          track = {this.props.track4}
          trackNum = {4}
          handleVolumeSlide={this.props.handleVolumeSlide}
          handleRateSlide={this.props.handleRateSlide}
          handlePitchSlide={this.props.handlePitchSlide}
          handleInSlide = {this.props.handleInSlide}
          handleOutSlide = {this.props.handleOutSlide}
          handleTrackClear = {this.props.handleTrackClear}
          />
      </div>
    )
  }
}

export default PlayerForm
