import React, { Component } from "react";
import Header from "../Header/Header";
import Scroll from "../Scroll/Scroll";
import CardContainer from "../CardContainer/CardContainer";
import Loading from "../Loading/Loading";
import { fetchMovies } from "../utils/fetch";
import "./App.scss";

class App extends Component {
  state = { cardsToRender: [], randomMovie: {}, isLoading: false };

  componentDidMount() {
    fetchMovies().then(result => this.setState({ randomMovie: { ...result } }));
  }

  retrieveData = toFetch => {
    this.setState({ isLoading: true });
    toFetch().then(response =>
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
    return (
      <div className="App">
        <Header retrieveData={this.retrieveData} />
        {this.handleScrollRender()}
        {this.handleCardRender()}
      </div>
    );
  }
}

export default App;
