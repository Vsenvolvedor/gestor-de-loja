import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;

    font-size: 62.5%;
    text-decoration: none;
  }

  body {
    background-color: #F4F2FF;
  }

  img {
    display: block;
    max-width: 100%;
  }
`