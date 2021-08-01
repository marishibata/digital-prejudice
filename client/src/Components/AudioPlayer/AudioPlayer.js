import React from 'react'
import { useState, useRef } from 'react';
import '../AudioPlayer/AudioPlayer.css';

import { FaPlay, FaPause } from "react-icons/fa"; // INSTALL

const AudioPlayer = ({ audiourl }) => {
  // setting default value to false as we don't want audio to play automatically
  // if we want it to play automatically then use true
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {

    let sound = new Audio(audiourl.url)
    sound.play();
    //console.log(audiourl.url);

    // might not need following code. 
    // Some reason the player currently plays item twice on second cliclk. Revisit this.

    const prevValue = isPlaying;

    setIsPlaying(!prevValue); // then within set we set it to the opposite
    if (prevValue) { // run new value of state in conditional
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  }

  // reference our audio component
  const audioPlayer = useRef();

  return (
    <div className="audioPlayer">
      <audio ref={audioPlayer} src={audiourl.url} rel="noreferrer"></audio>
      <button onClick={togglePlayPause} className="playPause">
        {isPlaying ? <FaPause /> : <FaPlay className="play" />}
      </button>
    </div>
  )

}

export default AudioPlayer;