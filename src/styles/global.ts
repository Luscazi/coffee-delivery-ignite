import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['purple']};
  }

  body, html {
    font-size: 62.5%;
  }

  body {
    background-color: ${(props) => props.theme['background']};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  ::-webkit-scrollbar{
      width: 8px;
      background-color: #dbac2c;
      border: 5px solid white;
      border-radius: 999px;
  }

  ::-webkit-scrollbar-thumb{
      background-color: #dbac2c;
      border-radius: 999px;
      border: 1px solid white;
  }
`