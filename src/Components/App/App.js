import React, { Component } from "react";
import Header from "../Header/Header";
import Scroll from "../Scroll/Scroll";
import { cleanRandomMovie } from "../../helpers";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      randomMovie: {}
    };
  }

  componentDidMount() {
    let randomNum = Math.floor(Math.random() * 7) + 1;
    fetch(`https://swapi.co/api/films/${randomNum}/`)
      .then(response => response.json())
      .then(result => cleanRandomMovie(result))
      .then(result => this.setState({ randomMovie: { ...result } }));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="background-style">
          <div className="starfield-left" />
          <div className="starfield-right" />
        </div>
        <Scroll randomMovie={this.state.randomMovie}/>
      </div>
    );
  }
}

export default App;
