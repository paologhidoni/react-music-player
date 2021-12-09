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
  const [songs, setSongs] = useState(tracks()); // get all of our songs
  const [currentSong, setCurrentSong] = useState(songs[0]); // set the first song to start with (current song)

  return (
    <div className="App">
      <Song currentSong={currentSong /* this is the state we are passing */} /> 
      <Player />


    </div>
  );
}

export default App;
