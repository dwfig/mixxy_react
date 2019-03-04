import React, { Component, Fragment } from 'react';

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
        <TrackPlayer />
        <TrackPlayer />
        <TrackPlayer />
        <TrackPlayer />
      </div>
    )
  }
}
