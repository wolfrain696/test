import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './Components/App';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  color: #373b40;
}
body {
  width: 100%;
  height: 100%;
  background: #E5E5E5;
}
`;

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root'),
);
