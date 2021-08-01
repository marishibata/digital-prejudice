import './App.css';
import { useState } from 'react';

import AudioPlayer from './Components/AudioPlayer/AudioPlayer';
import Description from './Components/Description/Description.js';
import TextSubmission from './Components/TextSubmission/TextSubmission';
import TextToMp3 from './Components/TextToMp3/TextToMp3';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  // revisit what this is doing - Jake explained it

  const [textSubmission, setTextSubmission] = useState({});

  const showTextSubmission = (value) => {
    setTextSubmission(value);
  }

  return (

    <div className="App">
      <div className="App-header">

        <AudioPlayer audiourl={textSubmission} />

        <Description />

        <TextSubmission passToParent={showTextSubmission} />
        {/* <TextToMp3 passToParent={showTextSubmission} /> */}


      </div>
    </div>

  );
}

export default App;
