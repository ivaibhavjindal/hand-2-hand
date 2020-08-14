import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Routes from "./Routes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
