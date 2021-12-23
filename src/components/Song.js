import React from 'react';
import "../styles/modifiers.css";
import "../styles/Song.css";

// Song component
const Song = ({currentSong}) => {
  return (
    <div className="song stack-md">

      <img src={currentSong.cover} alt="song cover" className="song__cover"></img>
      <h2 className="song__name">{currentSong.name}</h2>
      <h3 className="song__artist">{currentSong.artist}</h3>

    </div>
  )
}


export default Song;