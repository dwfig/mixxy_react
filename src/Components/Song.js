import React from 'react';

const Song = (props) => {

  return (
    <div className="song">
      {props.song.name}
      <span
        className="sendtoplayerbutton"
        onClick={() => props.handleSendToPlayer(props.song.tracks, props.song.name)}>
        Send to Player
      </span>
      <span
        role="img"
        aria-label="delete button"
        className="deletesongbutton"
        onClick={() => props.handleDelete(props.song)}>
        ✖️
      </span>
    </div>
  )
}

export default Song;
