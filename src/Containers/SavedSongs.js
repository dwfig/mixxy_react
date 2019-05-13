import React from 'react';
import Song from '../Components/Song'

const SavedSongs = props => {

  const generateSongs = () => {
    return props.songs.map(song => {
      return (
        < Song
          key={song.id}
          song={song}
          handleSendToPlayer={props.handleSendToPlayer}
          handleDelete={props.handleDelete}
        />
      )
    })
  }

  return (
    <div className = "savedsongs">
      {generateSongs()}
    </div>
  )
}

export default SavedSongs
