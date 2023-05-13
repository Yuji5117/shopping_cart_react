import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background: #eaebef;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;
