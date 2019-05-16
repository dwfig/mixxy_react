import React from 'react';

  const File = (props) => {

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
