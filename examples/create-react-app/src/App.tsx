import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider, Box, Checkbox } from "@chakra-ui/core";
import styled from "@emotion/styled";

interface Props {
  as?: string;
}

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="App">
        {/* <Box as="img" src="welcome.png" /> */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Checkbox variantColor="red" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
};

export default App;
