import React from "react";
import Navbar from "./src/components/Navbar";
import { GlobalStyle } from "./src/styles/Global.styles";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
    </div>
  );
};

export default App;
