// Tried to export this to TextSubmission Component but didn't work, revisit later

import styled, { createGlobalStyle, css } from 'styled-components';

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