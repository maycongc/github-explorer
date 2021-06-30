import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #333;
    color: #fff;
    font: 400 16px 'Roboto', sans-serif;
  }
`;
