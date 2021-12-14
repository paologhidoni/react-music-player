import React, {useState} from 'react'
// import React from 'react'

import './styles/App.css';

// Add components
import Player from './components/Player';
import Song from './components/Song';

// Import myTracks.js
import tracks from "./myTracks";



function App() {

  // State

  // get all of our songs
  const [songs, setSongs] = useState(tracks());

  // set the first song to start with (current song)
  const [currentSong, setCurrentSong] = useState(songs[0]); 

  // set the state of the song, whether it is currently playing or not, initially set as false
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong /* this is the state we are passing */} /> 
      <Player setIsPlaying={setIsPlaying} isPlaying={isPlaying} currentSong={currentSong}/>


    </div>
  );
}

export default App;
