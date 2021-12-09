import React from 'react';
import "../styles/modifiers.css";
import "../styles/Song.css";

const Song = ({currentSong}) => {
  return (
    <div className="song-container stack-md">
      <img src={currentSong.cover} alt="song cover"></img>
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>

    </div>
  )
}


export default Song;