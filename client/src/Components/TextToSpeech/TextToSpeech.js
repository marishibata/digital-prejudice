import '../TextToSpeech/TextToSpeech.css';
import { useRef } from 'react';

const TextToSpeech = () => {

  // fetch getTextToSpeech / postNewAudio from server
  // string in each audio
  // const soundfile = postNewAudio(); - from controller/API client

  // write audio playback function to pass into <Button
  const myAudio = useRef();
  const playAudio = () => {
    if (myAudio.current !== null) {
      myAudio.current.play();
    }
  }

  // <audio controls src="/media/cc0-audio/t-rex-roar.mp3">
  // <audio type='audio' controls ref={myAudio} src={soundfile} onClick={() => { playAudio() }}></audio>

  return (
    <figure>
      <figcaption>Listen to the T-Rex:</figcaption>
      <audio type='audio' controls ref={myAudio} onClick={() => { playAudio() }}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </figure>
  )

}

export default TextToSpeech;

