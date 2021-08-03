import './App.css';
import { useState } from 'react';

import AudioPlayer from './Components/AudioPlayer/AudioPlayer';
import Description from './Components/Description/Description.js';
import TextSubmission from './Components/TextSubmission/TextSubmission';
import TextToSpeech from './Components/TextToSpeech/TextToSpeech';

function App() {

  const [textSubmission, setTextSubmission] = useState({});

  const showTextSubmission = (value) => {
    setTextSubmission(value);
  }

  return (

    <div className="App">
      <div className="App-header">

        <AudioPlayer audiourl={textSubmission} />

        {/* <Description /> */}

        {/* <TextSubmission passToParent={showTextSubmission} /> */}

        <TextToSpeech passToParent={showTextSubmission} />

      </div>
    </div>

  );
}

export default App;
