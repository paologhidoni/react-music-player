import React, {useRef} from 'react';
import '../styles/Player.css'

// importing Font Awesome and specific icons.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faStepBackward } from '@fortawesome/free-solid-svg-icons';
import { faStepForward } from '@fortawesome/free-solid-svg-icons';


// Player component
const Player = ({currentSong, isPlaying, setIsPlaying}) => { // props
  // Ref
  const audioElementRef = useRef(null);
  // Event Handlers
  const playSongHandler = () => {
     // console.log(audioElementRef.current); // we get an object that references the audio HTML tag, we can access the .current property to get the URL of the song

    if(isPlaying) { // if the song is currently playing
      audioElementRef.current.pause(); // pause the song and
      setIsPlaying(!isPlaying); // set isPlaying state to the opposite value ( in this case false)
    } else { // if it's not currently playing
      audioElementRef.current.play(); // play it and
      setIsPlaying(!isPlaying); // set isPlaying state to the opposite value ( in this case true)
    }
  }

  return (
    <div className="player">

      <div className="player__time-controls">
        <p className="player__time-controls--start">Start Time</p>
        <input type="range" className="player__time-controls--progress"/> 
        <p className="player__time-controls--end">End Time</p>
      </div>

      <div className="player__play-controls">
        <FontAwesomeIcon className="player__play-controls--back" size="2x" icon={faStepBackward} />
        <FontAwesomeIcon onClick={playSongHandler} className="player__play-controls-play" size="2x" icon={faPlay} />
        <FontAwesomeIcon className="player__play-controls--forward" size="2x" icon={faStepForward} />
      </div>

      <audio ref={audioElementRef} src={currentSong.audio} className="player__audio-source"></audio>

    </div>
  )
}


export default Player;