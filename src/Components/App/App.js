import React, { Component } from "react";
import Header from "../Header/Header";
import Scroll from "../Scroll/Scroll";
import { cleanRandomMovie } from "../../helpers";
import { fetchPeople, fetchVehicles, fetchPlanets } from "../../fetchAll";
import "./App.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cardsToRender: [],
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

  renderPeople = () => {
    this.setState({ cardsToRender: fetchPeople() });
  };

  renderVehicles = () => {
    this.setState({ cardsToRender: fetchVehicles() });
  };

  renderPlanets = () => {
    this.setState({ cardsToRender: fetchPlanets() });
  };

  render() {
    console.log(this.state)
    const { randomMovie } = this.state;
    return (
      <div className="App">
        <Header
          renderPeople={this.renderPeople}
          renderPlanets={this.renderPlanets}
          renderVehicles={this.renderVehicles}
        />
        <div className="background-style">
          <div className="starfield-left" />
          <div className="starfield-right" />
        </div>
        <Scroll {...randomMovie} />
      </div>
    );
  }
}

export default App;
