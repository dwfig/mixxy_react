import React from 'react';
import File from '../Components/File'

const FileLibrary = props => {
<<<<<<< HEAD
  //console.log(props.urls);
=======
  // console.log(props);
  //console.log(props.urls);

>>>>>>> clear_btn2
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
      filelibrary:
      {generateFiles()}
    </div>
  )
}

export default FileLibrary
