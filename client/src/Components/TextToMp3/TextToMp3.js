import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core';

import '../../Styles/makesStyles';

const useStyles = makeStyles();


const TextToMp3 = ({ passToParent }) => {

  const classes = useStyles();

  const [content, setContent] = useState(''); // was message, setMessage before
  const [messageError, setMessageError] = useState(false);


  const postTextHandler = async (e) => {
    e.preventDefault()
    setMessageError(false)

    if (content === '') {
      setMessageError(true)
    }

    // postMessage - saves text on mock json-server db.json
    if (content) {
      console.log('content before fetch: ', content)
      const res = await fetch('https://viomatic-com-text-to-speech-tts-v1.p.rapidapi.com/getmp3?text=hello&language=en&sex=male', {
        method: 'POST',
        headers: {
          "x-rapidapi-key": "1a3a5bb6d9msha465f05d8f689fbp12c1f5jsn3140c1e7727a",
          "x-rapidapi-host": "viomatic-com-text-to-speech-tts-v1.p.rapidapi.com"
        },
      })
      console.log('after res after: ', res)
      const data = await res;
      passToParent(data);
      console.log(data, 'after fetch');
    }

  }

  return (
    <form noValidate autoComplete="off" onSubmit={postTextHandler}>
      <TextField
        onChange={(e) => setContent(e.target.value)}
        label="Enter Text You Received"
        variant="outlined"
        multiline
        rows={10}
        fullWidth
        required
        error={messageError}
      />

      <Button
        className={classes.btn}
        type="submit"
        color="primary"
        variant="contained">
        Submit
      </Button>
    </form>
  )

};


export default TextToMp3;