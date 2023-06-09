import { createGlobalStyle, ThemeProvider } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html{
    height:100%;
    font-size:14px;
    font-family:Montserrat;
    font-weight:400;
    color: #0A0A0A;
  }

  body{
    margin:0;
    padding:0;
  }
`;
