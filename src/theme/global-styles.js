import { createGlobalStyle } from 'styled-components'; 

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Black+Han+Sans|Roboto:300,400,700&subset=latin-ext');

  * {
    box-sizing: border-box;
  }

  body {
    color: #000;
    font-family: Roboto, sans-serif;
  }
`;

export default GlobalStyles;