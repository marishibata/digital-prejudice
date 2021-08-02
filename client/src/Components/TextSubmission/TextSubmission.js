import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';

import {
  StyledFormWrapper,
  StyledForm,
  StyledTextArea,
  StyledButton
} from '../../Styles/form.styles';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }

  body {
    font-family: monospace; 
    background: #000000;
    height: 100%;
    margin 0;
  }
 `;

const sharedStyles = css`
    background-color: #eee;
    height: 20px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    padding: 20px;
    box-sizing: border-box;
  `;


const TextSubmission = ({ passToParent }) => {

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


      try {
        const res2 = await fetch(data.url);
        console.log(res2, 'res2');
      } catch (e) {
        console.log(e);
      }

      //.then(() => history.push('/texts'))
      // .then(res => res.json())
      // .then(res => console.log(res, 'content after fetch'));
    }

  }

  return (
    <>
      <GlobalStyle />
      <StyledFormWrapper>
        <StyledForm onSubmit={postTextHandler}>
          <h4>Have you received racist texts on dating apps?</h4>
          <label htmlFor="message"></label>
          <StyledTextArea placeholder="Write what they sent here" name="message" onChange={(e) => setContent(e.target.value)} />
          <StyledButton type="submit">Turn Text To Audio</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </>
  )
};


export default TextSubmission;

