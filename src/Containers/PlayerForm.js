import React, { Component, Fragment } from 'react';
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
    console.log(this.props.track1)
    return (
      <div className = "playerform">
        <TrackPlayer track = {this.props.track1}/>
        <TrackPlayer track = {this.props.track2}/>
        <TrackPlayer track = {this.props.track3}/>
        <TrackPlayer track = {this.props.track4}/>
      </div>
    )
  }
}

export default PlayerForm
