import React from 'react';

  const File = (props) => {
    // console.log(props);

    return (
      <div className="file">
        {props.url.name}
        <span
          className = "addfilebutton"
          data-url={props.url.link}
          data-urlid = {props.url.id}
          data-name={props.url.name}
          data-length={props.url.length}
          onClick={props.handleFileInsertionToTrackPlayer}>
          Add Me
        </span>
      </div>
    )


  }

export default File;

// <select onChange={props.handleFileInsertionToTrackPlayer}>
//   <option defaultValue>Add to a Track:</option>
//   <option value="track1">Track 1</option>
//   <option value="track2">Track 2</option>
//   <option value="track3">Track 3</option>
//   <option value="track4">Track 4</option>
// </select>
