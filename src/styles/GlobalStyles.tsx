import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    min-height: 100%;

    background: var(--color-primary);
    overflow-x: hidden;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: 'Montserrat', -apple-system,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
  }
  :root {
    --color-primary: #F5F5F5;
    --color-black: #333;
    --color-white: #FFF;
    --color-gray: #666;
    --color-blue: #3483fa;
    --color-green: #00a650;

    --color-header: #FFF159;
    --color-search-placeholder: #AAAAAA;
    --color-border: #ddd;

    --reputation-1: #ffc3c1b5;
    --reputation-2: #ffdcb1b5;
    --reputation-3: #fff8afb5;
    --reputation-4: #cdff76b5;
    --reputation-5: #2eff93b5;

    --panel-shadow: 0 1px 3px 0 rgba(0,0,0,.3);
  }

`;
