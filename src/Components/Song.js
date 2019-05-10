import React from 'react';

const Song = (props) => {
  // console.log(props)
  return (
    <div className="song">
      {props.song.name}
      <span
        className="sendtoplayerbutton"
        onClick={() => props.handleSendToPlayer(props.song.tracks)}>
        Send to Player
      </span>
      <span
        className="deletesongbutton">
        ✖️
      </span>
    </div>
  )
}

export default Song;

// <div>
//   {props.song.tracks[0].name}
//   {props.song.tracks[1].name}
//   {props.song.tracks[2].name}
//   {props.song.tracks[3].name}
// </div>
