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

// delete function might wait until the posts have been retooled
// because otherwise it's going to need four deletes for songtracks and one for song
//
