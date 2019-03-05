import React from 'react';

  const File = (props) => {
    // console.log(props);

    return (
      <div className="file">
        {props.url.name}
        <button data-url={props.url.link} data-name={props.url.name}
          onClick={props.handleFileInsertionToTrackPlayer}> Add Me
        </button>
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
