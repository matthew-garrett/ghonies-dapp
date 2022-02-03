import React from "react";
import Home from "./components/Home";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import "./App.css";

function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Home />
    </Web3ReactProvider>
  );
}

export default App;
