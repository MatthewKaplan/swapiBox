import React from "react";
import "./Cards.scss";
import PropTypes from "prop-types";

const Cards = ({
  name,
  homeworld,
  species,
  population,
  terrain,
  climate,
  residents,
  model,
  starship_class,
  passengers
}) => {
  const peopleCard = (
    <article className="peopleCard card" key={name} style={{  backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")"}}>
      <h2>{name}</h2>
      <h3>
        Homeworld: <span>{homeworld}</span>{" "}
      </h3>
      <h3>
        Species: <span>{species}</span>
      </h3>
      <h3>
        Population: <span>{population}</span>
      </h3>
      <button className="favorite-btn">favorite</button>
    </article>
  );

  const planetCard = (
    <article className="planetCard card" key={name}>
      <h2>{name}</h2>
      <h3>
        Terrain: <span>{terrain}</span>
      </h3>
      <h3>
        Climate: <span>{climate}</span>
      </h3>
      <h3>
        Population: <span>{population}</span>
      </h3>
      <h3>
        Residents: <span>{residents}</span>
      </h3>
      <button className="favorite-btn">favorite</button>
    </article>
  );

  const vehicleCard = (
    <article className="vehicleCard card" key={name}>
      <h2>{name}</h2>
      <h3>
        Model: <span>{model}</span>
      </h3>
      <h3>
        Class: <span>{starship_class}</span>
      </h3>
      <h3>
        Number of passengers: <span>{passengers}</span>
      </h3>
      <button className="favorite-btn">favorite</button>
    </article>
  );

  if (homeworld) {
    return peopleCard;
  } else if (terrain) {
    return planetCard;
  } else {
    return vehicleCard;
  }
};

export default Cards;

Cards.propTypes = {
  name: PropTypes.string,
  homeworld: PropTypes.string,
  species: PropTypes.string,
  population: PropTypes.string,
  terrain: PropTypes.string,
  climate: PropTypes.string,
  residents: PropTypes.array,
  model: PropTypes.string,
  type: PropTypes.string,
  passengers: PropTypes.string
};
