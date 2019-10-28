import React from 'react';
import TrackPlayer from "../Components/TrackPlayer"

const PlayerForm = props => {

  return (
    <div className = "playerform">
      <form>
        <div id= "playerformlabel">Song Name:</div>
        <input id="playerformfield" type="text" name="songname" value={props.song_name} onChange={(e) => props.handleSongName(e)}/>
        <button id="playerformbutton" onClick={props.madFetches}>Save Song</button>
        <button id="playerclearbutton" onClick={props.handleFormClear}>Clear All</button>
      </form>
      <TrackPlayer
        track = {props.track1}
        trackNum = {1}
        handleVolumeSlide={props.handleVolumeSlide}
        handleRateSlide={props.handleRateSlide}
        handlePitchSlide={props.handlePitchSlide}
        handleInSlide = {props.handleInSlide}
        handleOutSlide = {props.handleOutSlide}
        handleTrackClear = {props.handleTrackClear}
        />
      <TrackPlayer
        track = {props.track2}
        trackNum = {2}
        handleVolumeSlide={props.handleVolumeSlide}
        handleRateSlide={props.handleRateSlide}
        handlePitchSlide={props.handlePitchSlide}
        handleInSlide = {props.handleInSlide}
        handleOutSlide = {props.handleOutSlide}
        handleTrackClear = {props.handleTrackClear}
        />
      <TrackPlayer
        track = {props.track3}
        trackNum = {3}
        handleVolumeSlide={props.handleVolumeSlide}
        handleRateSlide={props.handleRateSlide}
        handlePitchSlide={props.handlePitchSlide}
        handleInSlide = {props.handleInSlide}
        handleOutSlide = {props.handleOutSlide}
        handleTrackClear = {props.handleTrackClear}
        />
      <TrackPlayer
        track = {props.track4}
        trackNum = {4}
        handleVolumeSlide={props.handleVolumeSlide}
        handleRateSlide={props.handleRateSlide}
        handlePitchSlide={props.handlePitchSlide}
        handleInSlide = {props.handleInSlide}
        handleOutSlide = {props.handleOutSlide}
        handleTrackClear = {props.handleTrackClear}
        />
    </div>
  )
}

export default PlayerForm
