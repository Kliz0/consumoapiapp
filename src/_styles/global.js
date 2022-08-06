import { createGlobalStyle } from "styled-components";

// criação padronização estilo com styled-components

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body {
    min-height: 100vh;
    height: 100%;
    overflow: hidden;
  }

  #root{
    height: 100%;
  }

  *:focus {
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility !important;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0.5rem;
  }

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }


  .chakra-menu__menu-list{
    > * {
      margin-right: 0.7rem;
    }
  }
`;
