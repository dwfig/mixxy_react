import React from 'react';
import File from '../Components/File'

const FileLibrary = props => {
<<<<<<< HEAD
  //console.log(props.urls);
=======
>>>>>>> css-and-clear
  const generateFiles = () => {
    return props.urls.map(url => {
      return (
        < File
          key={url.id}
          url={url}
          handleFileInsertionToTrackPlayer={props.handleFileInsertionToTrackPlayer}
        />
      )
    })//end of map
  }//end of generateFiles fn

  return(
    <div className = "filelibrary">
      {generateFiles()}
    </div>
  )
}

export default FileLibrary
