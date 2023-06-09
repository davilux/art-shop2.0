import { createGlobalStyle, ThemeProvider } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html{
    height:100%;
    font-size:14px;
    font-family:Montserrat;
    font-weight:400;
  }

  body{
    margin:0;
    padding:0;
  }

  /* CUSTOM COLORS */
--eerie-black: #172121ff;
--magnolia: #f6f2ffff;
--dark-cyan: #32908fff;
--pomp-and-power: #8d5a97ff;
--rich-black: #121420ff;
`;
