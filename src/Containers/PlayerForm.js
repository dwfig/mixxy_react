import React, { Component } from 'react';
import TrackPlayer from "../Components/TrackPlayer"

class PlayerForm extends Component {
  //starting with class because it needs to be a form that submits
  // might be refactored into functional component
  constructor(props){
    super(props)
    this.state = {}
  }

  //form will need NAME field and SUBMIT button
  render(){
    return (
      <div className = "playerform">
        <TrackPlayer
          track = {this.props.track1}
          trackNum = {1}
          handleVolumeSlide={this.props.handleVolumeSlide}
          />
        <TrackPlayer
          track = {this.props.track2}
          trackNum = {2}
          handleVolumeSlide={this.props.handleVolumeSlide}
          />
        <TrackPlayer
          track = {this.props.track3}
          trackNum = {3}
          handleVolumeSlide={this.props.handleVolumeSlide}
          />
        <TrackPlayer
          track = {this.props.track4}
          trackNum = {4}
          handleVolumeSlide={this.props.handleVolumeSlide}
          />
        <button onClick={this.props.handleSongSave}>Save As a Song</button>
      </div>
    )
  }
}

export default PlayerForm
