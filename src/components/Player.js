import React, {useRef} from 'react';
import '../styles/Player.css'

// importing Font Awesome and specific icons.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faStepBackward } from '@fortawesome/free-solid-svg-icons';
import { faStepForward } from '@fortawesome/free-solid-svg-icons';

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
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" /> 
        <p>End Time</p>
      </div>

      <div className="play-control">
        <FontAwesomeIcon className="skip-back" size="2x" icon={faStepBackward} />
        <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={faPlay} />
        <FontAwesomeIcon className="skip-forward" size="2x" icon={faStepForward} />

      </div>
      <audio ref={audioElementRef} src={currentSong.audio}></audio>
    </div>
  )
}


export default Player;