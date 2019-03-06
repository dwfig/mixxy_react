import React from 'react';
import Song from '../Components/Song'

const SavedSongs = props => {

  const generateSongs = () => {
    return props.songs.map(song => {
      return (
        < Song
          key={song.id}
          song={song}
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
