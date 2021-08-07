import './App.css';
import { useState } from 'react';

import AudioPlayer from './Components/AudioPlayer/AudioPlayer';
import TextToSpeech from './Components/TextToSpeech/TextToSpeech';

function App() {

  const [textSubmission, setTextSubmission] = useState({});

  const showTextSubmission = (value) => {
    setTextSubmission(value);
  }

  return (

    <div className="App">
      <div className="App-header">
        <p></p>

        <AudioPlayer audiourl={textSubmission} />
        <p></p>
        <TextToSpeech passToParent={showTextSubmission} />

      </div>
    </div>

  );
}

export default App;
