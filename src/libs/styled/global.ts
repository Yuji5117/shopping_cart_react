import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background: #fff;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;
