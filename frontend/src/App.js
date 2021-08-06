import React from "react";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import apolloClient from "./apollo/ApolloClient";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Routes from "./Routes";
import "./App.css";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes />
          <ScrollToTop />
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
