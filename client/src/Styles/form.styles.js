import styled, { css } from 'styled-components';

export const sharedStyles = css`
    background-color: #eee;
    height: 20px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    padding: 20px;
    box-sizing: border-box;
  `;

export const StyledFormWrapper = styled.div`
  display: inline-block;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`
export const StyledForm = styled.form`
  width: 100%;
  max-width: 700px; 
  padding: 40px;
  background-color: #1C1C1C;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
  `;

export const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 200px;
  resize: none;
  ${sharedStyles}
  `;

export const StyledButton = styled.button`
  display: block;
  background-color: #b6e67bcb;
  color: #fff;
  font-size: 0.9rem;
  font-family: monospace; 
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
  `;

export const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
  `;