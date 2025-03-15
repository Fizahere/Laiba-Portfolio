import React from "react";
import './App.css'
import { BrowserRouter } from "react-router-dom";
import Portfolio from "./Portfolio/Portfolio";

function App() {

  return (
    <>
      <BrowserRouter>
      <Portfolio/>
      </BrowserRouter>
    </>
  )
}

export default App
