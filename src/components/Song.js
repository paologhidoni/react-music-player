import React from 'react';
import "../styles/Song.css"

const Song = ({currentSong}) => {
  return (
    <div className="song-container">
      <img src={currentSong.cover} alt="song cover"></img>
      <h2>{currentSong.name}</h2>
      <h2>{currentSong.artist}</h2>

    </div>
  )
}


export default Song;