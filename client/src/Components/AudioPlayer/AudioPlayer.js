import React from 'react'
import { useState, useRef } from 'react';
import '../AudioPlayer/AudioPlayer.css';
import { FaPlay, FaPause } from "react-icons/fa";


const AudioPlayer = ({ audiourl }) => {

  // setting default value to false as we don't want audio to play automatically
  // if we want it to play automatically then use true
  const [isPlaying, setIsPlaying] = useState(false);

  // reference our audio component
  const audioPlayer = useRef();

  const togglePlayPause = () => {

    // isPlaying state is asynchronous so we need to get previous value
    const prevValue = isPlaying;

    setIsPlaying(!prevValue); // then within set we set it to the opposite
    if (!prevValue) { // run new value of state in conditional
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  }


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