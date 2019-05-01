import React, { Component } from "react";
import Header from "../Header/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="background-style">
          <div className="starfield-left" />
          <div className="starfield-right" />
        </div>
      </div>
    );
  }
}

export default App;
