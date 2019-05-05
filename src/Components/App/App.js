import React, { Component } from "react";
import Header from "../Header/Header";
import Scroll from "../Scroll/Scroll";
import CardContainer from "../CardContainer/CardContainer";
import Loading from "../Loading/Loading";
import { cleanRandomMovie } from "../../helpers";
import { fetchPeople, fetchVehicles, fetchPlanets } from "../../fetch";
import "./App.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cardsToRender: [],
      randomMovie: {},
      isLoading: false
    };
  }

  componentDidMount() {
    let randomNum = Math.floor(Math.random() * 7) + 1;
    fetch(`https://swapi.co/api/films/${randomNum}/`)
      .then(response => response.json())
      .then(result => cleanRandomMovie(result))
      .then(result => this.setState({ randomMovie: { ...result } }));
  }

  retrievePeople = () => {
    this.setState({ isLoading: true });
    fetchPeople().then(response =>
      this.setState({ cardsToRender: response, isLoading: false })
    );
  };

  retrieveVehicles = () => {
    this.setState({ isLoading: true });
    fetchVehicles().then(response =>
      this.setState({ cardsToRender: response, isLoading: false })
    );
  };

  retrievePlanets = () => {
    this.setState({ isLoading: true });
    fetchPlanets().then(response =>
      this.setState({ cardsToRender: response, isLoading: false })
    );
  };

  handleCardRender() {
    const { cardsToRender, isLoading } = this.state;
    if (isLoading === true) {
      return <Loading />;
    } else {
      return <CardContainer cardsToBeRendered={cardsToRender} />;
    }
  }

  handleScrollRender() {
    const { randomMovie, cardsToRender, isLoading } = this.state;
    if (cardsToRender.length === 0 && isLoading === false) {
      return <Scroll {...randomMovie} />;
    }
  }

  render() {
    console.log(this.state);
    const { cardsToRender } = this.state;
    console.log("cardsToRender", cardsToRender);
    return (
      <div className="App">
        <Header
          retrievePeople={this.retrievePeople}
          retrievePlanets={this.retrievePlanets}
          retrieveVehicles={this.retrieveVehicles}
        />
        {this.handleScrollRender()}
        {this.handleCardRender()}
        <div className="background-style">
          <div className="starfield-left" />
          <div className="starfield-right" />
        </div>
      </div>
    );
  }
}

export default App;
