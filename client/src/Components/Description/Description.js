// import logo from './logo.svg';
import React from 'react';

import '../Description/Description.css';
// import Theme from '../../Styles/theme';
// import { ThemeProvider } from '@material-ui/core';

function Description() {
  return (
    <div className="Description">
      <header className="Description-body">
        <img src="https://media.sketchfab.com/models/35e890aaa80e431ca7347bb2bbce2a54/thumbnails/8960793594b84d5bb456cb8b9fc3177d/9c45f71f69554827831d9df8de2a18d5.jpeg" />
        <p>
          These are just some of the things people have sent to dating app users.
          Sounds alienating?
          They are, not only because racism alienates people, but also because such messages are never vocalised.
          < p >
            Those who recieve racist messages on dating apps don't know what the message sender sounds like as they have never met.
            Vocalising them amplifies how that could sound like from a person, and makes it more real for those who don't know what it's like to receive one.
          </p>
          Do you know what this alienation feels like?
          If yes, please contribute to this interactive documentary to educate others.
        </p>
        Fill out the form below generate voices for the racist messages you recieve.
      </header>
      <p></p>
    </div>
  );
}

export default Description;