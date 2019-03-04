import React, { Component, Fragment } from 'react';

const FileLibrary = props => {

  const generateFiles = () =>{
    return(
      <div className="file">
        file
      </div>
    )
  }

  return(
    <div className = "filelibrary">
      filelibrary: 
      {generateFiles()}
    </div>
  )
}

export default FileLibrary
