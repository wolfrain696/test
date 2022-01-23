import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/';
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
`

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle/>
  </React.StrictMode>,
  document.getElementById('root')
);
