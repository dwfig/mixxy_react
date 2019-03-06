import React from 'react';

const Song = (props) => {
<<<<<<< HEAD
  // console.log(props);
  return (
    <div className="song">
      {props.song.name}

      <button>Edit?? Btn</button>
=======
  //console.log(props);
  return (
    <div className="song">
      {props.song.name}
      <div>
        {props.song.tracks[0].name}
        {props.song.tracks[1].name}
        {props.song.tracks[2].name}
        {props.song.tracks[3].name}
      </div>
      <button className="songeditbutton">Edit?? Btn</button>
>>>>>>> css-and-clear
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
