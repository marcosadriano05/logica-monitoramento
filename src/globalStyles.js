import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  body {
    font-family: sans-serif;
  }

  a {
    text-decoration: none;
  }

  /* Extra large widgets */
  @media (max-width: 1280px) {
    html {
      font-size: 93.75%;
    }
  }

  /* Large widgets */
  @media (max-width: 992px) {
    html {
      font-size: 87.5%;
    }
  }

  /* Medium widgets */
  @media (max-width: 768px) {
    html {
      font-size: 81.25%;
    }
  }

  /* Small widgets */
  @media (max-width: 480px) {
    html {
      font-size: 75%;
    }
  }
`

export default GlobalStyle;