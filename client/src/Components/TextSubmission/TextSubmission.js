import React, { useEffect, useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core';

import '../../Styles/makesStyles';

const useStyles = makeStyles();


const TextSubmission = ({ passToParent }) => {

  const classes = useStyles();

  const [content, setContent] = useState(''); // was message, setMessage before
  const [messageError, setMessageError] = useState(false);


  const postTextHandler = async (e) => {
    e.preventDefault()
    setMessageError(false)

    if (content === '') {
      setMessageError(true)
    }

    if (content) {
      console.log('content before fetch: ', content)
      const res = await fetch('http://localhost:3010/texts', {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ content })
      })
      console.log('after res after: ', res)
      const data = await res.json();
      passToParent(data);
      console.log(data, 'after fetch');
      //.then(() => history.push('/texts'))
      // .then(res => res.json())
      // .then(res => console.log(res, 'content after fetch'));
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


export default TextSubmission;

